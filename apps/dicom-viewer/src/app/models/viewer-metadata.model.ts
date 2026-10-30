import { WasmOrientation } from '../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';

/**
 * Plain JS snapshot of the viewer state produced by `MetaData` in
 * `libs/dicom-viewer-rs/src/lib.rs` (serialized with camelCase field names).
 *
 * It is a detached copy: the viewer never mutates an object JS already holds,
 * so a fresh snapshot has to be requested after every mutation.
 */
export interface ViewerMetadata {
  total: number;
  currentIndex: number;
  seriesTotal: number;
  mprOrientation: WasmOrientation;
  currentSeriesInstanceUid: string | null;
}

/** Result of `DicomViewer.set_use_gpu()`. */
export interface GpuUpdate {
  gpuActive: boolean;
  metadata: ViewerMetadata;
}
