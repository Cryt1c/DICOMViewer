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
import {
  DecodePoolService,
  ProcessFilesOutcome,
} from '../../services/decode-pool.service';

@Component({
  selector: 'image-picker',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    DragAndDropComponent,
  ],
  templateUrl: './image-picker.html',
  styleUrl: './image-picker.css',
})
export class ImagePickerComponent {
  loading: WritableSignal<boolean | null> = signal(false);
  isDraggedOver: boolean = false;
  private pool = inject(DecodePoolService);
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
      const start = performance.now();
      const outcome: ProcessFilesOutcome = await this.pool.process(files);
      if (outcome.ok.length === 0) {
        throw new Error(
          outcome.failed[0]?.message ?? 'could not process any file'
        );
      }

      dicomViewer.begin_read();
      for (const file of outcome.ok) {
        dicomViewer.add_processed_file(file.meta, new Uint8Array(file.luma));
      }
      dicomViewer.finish_read();
      const totalMs = performance.now() - start;

      console.log(
        `dicom load: ${outcome.ok.length}/${files.length} files | file reading Σ${outcome.readMs.toFixed(0)}ms, parsing Σ${outcome.parseMs.toFixed(0)}ms, decoding Σ${outcome.decodeMs.toFixed(0)}ms, total ${totalMs.toFixed(0)}ms`
      );

      dicomViewer.render_image_at_index(0);
      let dicomHierarchy: DicomHierarchy = dicomViewer.get_dicom_hierarchy();
      this.dicomHierarchy.set(dicomHierarchy);
      this.getMetadata.emit();
      const failedSuffix =
        outcome.failed.length > 0 ? `, ${outcome.failed.length} failed` : '';
      this.openSnackBar.emit({
        message:
          '✅ ' +
          this.metadata()?.total +
          ' files successfully loaded' +
          failedSuffix,
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
