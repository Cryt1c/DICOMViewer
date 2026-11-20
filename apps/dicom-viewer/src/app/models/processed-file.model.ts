export interface ProcessedFileMeta {
  width: number;
  height: number;
  series_instance_uid: string;
  acquisition_number: number | null;
  order: number;
  patient_id: string;
  study_instance_uid: string;
  study_description: string | null;
  series_number: number | null;
  series_description: string | null;
  series_date: string | null;
  series_time: string | null;
  modality: string | null;
  body_part_examined: string | null;
  sop_instance_uid: string;
  instance_number: number | null;
  table_position: number | null;
}

export interface DecodeWorkerRequest {
  id: number;
  file: File;
  wasmModule?: WebAssembly.Module;
}

export interface DecodeWorkerResult {
  type: 'result';
  id: number;
  meta: ProcessedFileMeta;
  luma: ArrayBuffer;
  readMs: number;
  parseMs: number;
  decodeMs: number;
}

export interface DecodeWorkerError {
  type: 'error';
  id: number;
  message: string;
}

export type DecodeWorkerResponse = DecodeWorkerResult | DecodeWorkerError;
