import { Injectable } from '@angular/core';
import {
  DecodeWorkerResponse,
  ProcessedFileMeta,
} from '../models/processed-file.model';
import { parse_file } from '../../../../../libs/dicom-viewer-rs/public-api';

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
}

/**
 * Pull-based pool of decode workers: each worker reads, parses and decodes
 * one file at a time and asks for the next one when it is done, so uneven
 * file costs balance themselves out.
 */
@Injectable({ providedIn: 'root' })
export class DecodePoolService {
  private workers: Worker[] = [];

  async process(files: File[]): Promise<ProcessFilesOutcome> {
    const outcome: ProcessFilesOutcome = {
      ok: [],
      failed: [],
      readMs: 0,
      parseMs: 0,
      decodeMs: 0,
    };
    if (files.length === 0) {
      return outcome;
    }

    const workerCount = Math.max(
      1,
      Math.min(files.length, navigator.hardwareConcurrency || 4)
    );
    const workers = this.getWorkers(workerCount);

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
        worker.postMessage({ id, file: files[id] });
      };

      for (const worker of workers) {
        worker.onmessage = (event: MessageEvent<DecodeWorkerResponse>) => {
          const message = event.data;
          if (message.type === 'result') {
            outcome.ok.push({
              id: message.id,
              meta: message.meta,
              luma: message.luma,
            });
            outcome.readMs += message.readMs;
            outcome.parseMs += message.parseMs;
            outcome.decodeMs += message.decodeMs;
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
  async processSequential(files: File[]): Promise<ProcessFilesOutcome> {
    const outcome: ProcessFilesOutcome = {
      ok: [],
      failed: [],
      readMs: 0,
      parseMs: 0,
      decodeMs: 0,
    };

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
      } catch (error: unknown) {
        outcome.failed.push({
          id: outcome.ok.length + outcome.failed.length,
          message: error instanceof Error ? error.message : String(error),
        });
      }
    }

    return outcome;
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
