import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DicomViewer,
  MetaData,
} from '../../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';
import { DicomHierarchy } from '../../models/dicom-hierarchy.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  DecodePoolService,
  filterDicomFiles,
  OnResultCallback,
  ProcessFilesOutcome,
  ProcessedFileResult,
} from '../../services/decode-pool.service';

@Component({
  selector: 'image-picker',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    DragAndDropComponent,
  ],
  templateUrl: './image-picker.html',
  styleUrl: './image-picker.css',
})
export class ImagePickerComponent {
  loading: WritableSignal<boolean | null> = signal(false);
  isDraggedOver: boolean = false;
  private pool = inject(DecodePoolService);
  singleThreaded: WritableSignal<boolean> = signal(false);
  @Input({ required: true }) dicomViewer!: Signal<DicomViewer | null>;
  @Input({ required: true }) metadata!: Signal<MetaData | null>;
  @Input({ required: true })
  dicomHierarchy!: WritableSignal<DicomHierarchy | null>;
  @Output() getMetadata = new EventEmitter<null>();
  @Output() openSnackBar = new EventEmitter<{
    message: string;
    action: string;
  }>();

  async handleFiles(files: File[]): Promise<void> {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    this.loading.set(true);
    try {
      const { dicom, skipped } = await filterDicomFiles(files);
      if (dicom.length === 0) {
        throw new Error('no DICOM files found');
      }

      const start = performance.now();

      // Reset the viewer up front and assemble each file as it decodes so
      // the first slice can render while the rest of the series is still
      // in flight (progressive loading).
      dicomViewer.begin_read();
      let firstImageRendered = false;
      const onResult: OnResultCallback = (file: ProcessedFileResult) => {
        dicomViewer.add_processed_file(file.meta, new Uint8Array(file.luma));
        if (!firstImageRendered) {
          firstImageRendered = true;
          // finish_read() builds the filter indices the renderer reads
          // through; without it render_image_at_index(0) finds nothing.
          dicomViewer.finish_read();
          dicomViewer.render_image_at_index(0);
        }
      };

      const outcome: ProcessFilesOutcome = this.singleThreaded()
        ? await this.pool.processSequential(dicom, onResult)
        : await this.pool.process(dicom, onResult);
      if (outcome.ok.length === 0) {
        throw new Error(
          outcome.failed[0]?.message ?? 'could not process any file'
        );
      }

      dicomViewer.finish_read();
      const totalMs = performance.now() - start;

      console.log(
        `dicom load: ${outcome.ok.length}/${dicom.length} files | file reading Σ${outcome.readMs.toFixed(0)}ms, parsing Σ${outcome.parseMs.toFixed(0)}ms, decoding Σ${outcome.decodeMs.toFixed(0)}ms, first image ${outcome.firstImageMs.toFixed(0)}ms, total ${totalMs.toFixed(0)}ms`
      );

      dicomViewer.render_image_at_index(0);
      let dicomHierarchy: DicomHierarchy = dicomViewer.get_dicom_hierarchy();
      this.dicomHierarchy.set(dicomHierarchy);
      this.getMetadata.emit();
      const failedSuffix =
        outcome.failed.length > 0 ? `, ${outcome.failed.length} failed` : '';
      const skippedSuffix = skipped > 0 ? `, ${skipped} non-DICOM skipped` : '';
      this.openSnackBar.emit({
        message:
          '✅ ' +
          this.metadata()?.total +
          ' files successfully loaded' +
          failedSuffix +
          skippedSuffix,
        action: 'Close',
      });
    } catch (error: any) {
      this.dicomHierarchy.set(null);
      this.getMetadata.emit();
      this.openSnackBar.emit({
        message: '⚠️ Could not load files: ' + error.message,
        action: 'Close',
      });
    } finally {
      this.loading.set(false);
    }
  }

  async handleInputChangeEvent(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files || []);
    await this.handleFiles(files);
  }
}
