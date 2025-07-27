import { Component, EventEmitter, Input, Output, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicomViewer, MetaData } from '../../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';
import { DicomHierarchy } from '../../models/dicom-hierarchy.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'image-picker',
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIcon, DragAndDropComponent],
  templateUrl: './image-picker.html',
  styleUrl: './image-picker.css',
})
export class ImagePickerComponent {
  loading: WritableSignal<boolean | null> = signal(false);
  isDraggedOver: boolean = false;
  @Input({ required: true }) dicomViewer!: Signal<DicomViewer | null>;
  @Input({ required: true }) metadata!: Signal<MetaData | null>;
  @Input({ required: true }) dicomHierarchy!: WritableSignal<DicomHierarchy | null>;
  @Output() getMetadata = new EventEmitter<null>();
  @Output() openSnackBar = new EventEmitter<{message: string, action: string}>();

  async handleFiles(files: File[]): Promise<void>{
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    const filesPromise = Array.from(files).map((file: Blob) => {
      const fileReader = new FileReader();
      return new Promise<Uint8Array>((resolve, reject) => {
        fileReader.onload = () => {
          if (fileReader.result instanceof ArrayBuffer) {
            resolve(new Uint8Array(fileReader.result));
          } else {
            reject(new Error('Failed to read file as Arraybuffer'));
          }
        };
        fileReader.onerror = () => {
          reject(fileReader.error);
        };
        fileReader.readAsArrayBuffer(file);
      });
    });
    const loadedFiles = await Promise.all(filesPromise);

    try {
      dicomViewer.read_files(loadedFiles);
      dicomViewer.render_image_at_index(0);
      let dicomHierarchy: DicomHierarchy = dicomViewer.get_dicom_hierarchy();
      this.dicomHierarchy.set(dicomHierarchy);
      this.getMetadata.emit();
      this.openSnackBar.emit({message: '✅ ' + this.metadata()?.total + ' files successfully loaded', action: 'Close'});
    } catch (error: any) {
      this.dicomHierarchy.set(null);
      this.getMetadata.emit();
      this.openSnackBar.emit({message: '⚠️ Could not load files: ' + error.message,  action: 'Close'});
    } finally {
      this.loading.set(false);
    }
  }

  async handleInputChangeEvent(event: Event): Promise<void> {
    this.loading.set(true);
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files || []);
    this.handleFiles(files);
  }
}
