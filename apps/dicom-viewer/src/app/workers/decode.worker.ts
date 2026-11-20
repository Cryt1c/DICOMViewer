/// <reference lib="webworker" />
import {
  initDicomViewerRs,
  parse_file,
} from '../../../../../libs/dicom-viewer-rs/public-api';
import {
  DecodeWorkerRequest,
  DecodeWorkerResponse,
  ProcessedFileMeta,
} from '../models/processed-file.model';

let wasmReady: Promise<unknown> | null = null;

function ensureWasm(wasmModule?: WebAssembly.Module): Promise<unknown> {
  if (!wasmReady) {
    wasmReady = wasmModule
      ? initDicomViewerRs({ module_or_path: wasmModule })
      : initDicomViewerRs();
  }
  return wasmReady;
}

addEventListener(
  'message',
  async ({ data }: MessageEvent<DecodeWorkerRequest>) => {
    try {
      await ensureWasm(data.wasmModule);

      const readStart = performance.now();
      const bytes = new Uint8Array(await data.file.arrayBuffer());
      const readMs = performance.now() - readStart;

      const parseStart = performance.now();
      const parsed = parse_file(bytes);
      const parseMs = performance.now() - parseStart;

      const decodeStart = performance.now();
      const processed = parsed.decode();
      const meta = processed.meta() as ProcessedFileMeta;
      const luma = processed.luma();
      processed.free();
      parsed.free();
      const decodeMs = performance.now() - decodeStart;

      const lumaBuffer = luma.slice().buffer;
      const response: DecodeWorkerResponse = {
        type: 'result',
        id: data.id,
        meta,
        luma: lumaBuffer,
        readMs,
        parseMs,
        decodeMs,
      };
      postMessage(response, [lumaBuffer]);
    } catch (error: unknown) {
      const response: DecodeWorkerResponse = {
        type: 'error',
        id: data.id,
        message: error instanceof Error ? error.message : String(error),
      };
      postMessage(response);
    }
  }
);
