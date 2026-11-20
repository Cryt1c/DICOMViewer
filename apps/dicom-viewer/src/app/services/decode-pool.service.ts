import { Injectable } from '@angular/core';
import {
  DecodeWorkerResponse,
  ProcessedFileMeta,
} from '../models/processed-file.model';
import {
  initDicomViewerRs,
  parse_file,
} from '../../../../../libs/dicom-viewer-rs/public-api';

export interface ProcessedFileResult {
  id: number;
  meta: ProcessedFileMeta;
  luma: ArrayBuffer;
}

export interface ProcessFilesOutcome {
  ok: ProcessedFileResult[];
  failed: { id: number; message: string }[];
  readMs: number;
  parseMs: number;
  decodeMs: number;
  /** Wall-clock time from process start until the first file decoded. */
  firstImageMs: number;
}

/**
 * Invoked once per successfully decoded file, as it arrives, so callers can
 * assemble and render incrementally (progressive loading).
 */
export type OnResultCallback = (result: ProcessedFileResult) => void;

const DICOM_MAGIC_OFFSET = 128;
const DICOM_MAGIC_LENGTH = 4;

/**
 * True when the file carries the `DICM` magic at offset 128 (DICOM Part-10
 * preamble). Files too short to contain the preamble cannot be Part-10 and
 * are rejected outright.
 */
export async function hasDicomMagic(file: File): Promise<boolean> {
  const magic = new Uint8Array(
    await file
      .slice(DICOM_MAGIC_OFFSET, DICOM_MAGIC_OFFSET + DICOM_MAGIC_LENGTH)
      .arrayBuffer()
  );
  if (magic.length < DICOM_MAGIC_LENGTH) {
    return false;
  }
  return String.fromCharCode(...magic) === 'DICM';
}

/**
 * Splits dropped/selected files into DICOM and non-DICOM so folder drops
 * (thumbnails, desktop metadata, …) stay out of the failure count.
 */
export async function filterDicomFiles(files: File[]): Promise<{
  dicom: File[];
  skipped: number;
}> {
  const checks = await Promise.all(files.map(hasDicomMagic));
  const dicom = files.filter((_, i) => checks[i]);
  return { dicom, skipped: files.length - dicom.length };
}

/**
 * Pull-based pool of decode workers: each worker reads, parses and decodes
 * one file at a time and asks for the next one when it is done, so uneven
 * file costs balance themselves out.
 */
@Injectable({ providedIn: 'root' })
export class DecodePoolService {
  private workers: Worker[] = [];
  private modulePromise: Promise<WebAssembly.Module> | null = null;
  private mainWasmReady?: Promise<void>;

  /**
   * Loads wasm once: the module is compiled a single time, the main-thread
   * viewer instantiates from it and the same compiled artifact is handed to
   * the workers. Falls back to the glue's own loading if precompilation
   * fails.
   */
  async initWasm(): Promise<void> {
    if (!this.mainWasmReady) {
      this.mainWasmReady = (async () => {
        const wasmModule = await this.precompiledModule();
        await initDicomViewerRs(
          wasmModule ? { module_or_path: wasmModule } : undefined
        );
      })();
    }
    await this.mainWasmReady;
  }

  /**
   * Compiles the wasm module once on the main thread so the viewer and every
   * worker can instantiate from the shared compiled artifact instead of
   * compiling their own copies. Resolves to undefined on failure, in which
   * case callers fall back to the glue's own loading.
   */
  private precompiledModule(): Promise<WebAssembly.Module | undefined> {
    if (!this.modulePromise) {
      const url = new URL('dicom_viewer_rs_bg.wasm', document.baseURI);
      this.modulePromise = (async () => {
        try {
          return await WebAssembly.compileStreaming(fetch(url));
        } catch {
          return await WebAssembly.compile(
            await (await fetch(url)).arrayBuffer()
          );
        }
      })();
      this.modulePromise.catch(() => {
        this.modulePromise = null;
      });
    }
    return this.modulePromise.catch(() => undefined);
  }

  async process(
    files: File[],
    onResult?: OnResultCallback
  ): Promise<ProcessFilesOutcome> {
    const outcome: ProcessFilesOutcome = {
      ok: [],
      failed: [],
      readMs: 0,
      parseMs: 0,
      decodeMs: 0,
      firstImageMs: 0,
    };
    if (files.length === 0) {
      return outcome;
    }

    const startedAt = performance.now();
    const workerCount = Math.max(
      1,
      Math.min(files.length, navigator.hardwareConcurrency || 4)
    );
    const workers = this.getWorkers(workerCount);
    const wasmModule = await this.precompiledModule();

    return new Promise<ProcessFilesOutcome>(resolve => {
      let nextId = 0;
      let completed = 0;
      const currentId = new Map<Worker, number>();

      const dispatch = (worker: Worker) => {
        const id = nextId;
        nextId += 1;
        if (id >= files.length) {
          return;
        }
        currentId.set(worker, id);
        worker.postMessage({ id, file: files[id], wasmModule });
      };

      for (const worker of workers) {
        worker.onmessage = (event: MessageEvent<DecodeWorkerResponse>) => {
          const message = event.data;
          if (message.type === 'result') {
            const result: ProcessedFileResult = {
              id: message.id,
              meta: message.meta,
              luma: message.luma,
            };
            outcome.ok.push(result);
            outcome.readMs += message.readMs;
            outcome.parseMs += message.parseMs;
            outcome.decodeMs += message.decodeMs;
            this.notifyResult(result, onResult, outcome, startedAt);
          } else {
            outcome.failed.push({ id: message.id, message: message.message });
          }
          completed += 1;
          if (completed === files.length) {
            resolve(outcome);
            return;
          }
          dispatch(worker);
        };
        worker.onerror = (event: ErrorEvent) => {
          outcome.failed.push({
            id: currentId.get(worker) ?? -1,
            message: event.message,
          });
          completed += 1;
          if (completed === files.length) {
            resolve(outcome);
            return;
          }
          dispatch(worker);
        };
        dispatch(worker);
      }
    });
  }

  /**
   * Single-threaded baseline: processes every file on the main thread with
   * the same wasm calls and timing aggregation as the worker pool, so
   * parallel and sequential loads are directly comparable.
   */
  async processSequential(
    files: File[],
    onResult?: OnResultCallback
  ): Promise<ProcessFilesOutcome> {
    const outcome: ProcessFilesOutcome = {
      ok: [],
      failed: [],
      readMs: 0,
      parseMs: 0,
      decodeMs: 0,
      firstImageMs: 0,
    };
    const startedAt = performance.now();

    for (const file of files) {
      try {
        const readStart = performance.now();
        const bytes = new Uint8Array(await file.arrayBuffer());
        outcome.readMs += performance.now() - readStart;

        const parseStart = performance.now();
        const parsed = parse_file(bytes);
        outcome.parseMs += performance.now() - parseStart;

        const decodeStart = performance.now();
        const processed = parsed.decode();
        const meta = processed.meta() as ProcessedFileMeta;
        const luma = processed.luma();
        processed.free();
        parsed.free();
        outcome.decodeMs += performance.now() - decodeStart;

        outcome.ok.push({
          id: outcome.ok.length,
          meta,
          luma: luma.slice().buffer,
        });
        this.notifyResult(
          outcome.ok[outcome.ok.length - 1],
          onResult,
          outcome,
          startedAt
        );
      } catch (error: unknown) {
        outcome.failed.push({
          id: outcome.ok.length + outcome.failed.length,
          message: error instanceof Error ? error.message : String(error),
        });
      }
    }

    return outcome;
  }

  /**
   * Reports a decoded result to the caller and stamps the time of the first
   * one. The callback is isolated so a throwing consumer can never break the
   * pool's message loop (which would hang the pending promise).
   */
  private notifyResult(
    result: ProcessedFileResult,
    onResult: OnResultCallback | undefined,
    outcome: ProcessFilesOutcome,
    startedAt: number
  ): void {
    if (outcome.firstImageMs === 0) {
      outcome.firstImageMs = performance.now() - startedAt;
    }
    if (!onResult) {
      return;
    }
    try {
      onResult(result);
    } catch (error: unknown) {
      console.error('onResult callback failed', error);
    }
  }

  private getWorkers(count: number): Worker[] {
    while (this.workers.length < count) {
      this.workers.push(
        new Worker(new URL('../workers/decode.worker', import.meta.url), {
          type: 'module',
        })
      );
    }
    return this.workers.slice(0, count);
  }
}
