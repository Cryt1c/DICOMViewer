import { Component, computed, EventEmitter, Input, Output, Signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { DicomViewer, MetaData } from '../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';

@Component({
  selector: 'dicom-renderer',
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, NgIf],
  templateUrl: './dicom-renderer.component.html',
  styleUrl: './dicom-renderer.component.scss',
})
export class DicomRendererComponent {
  @Input({ required: true }) dicomViewer!: Signal<DicomViewer | null>;
  @Input({ required: true }) metadata!: Signal<MetaData | null>;
  @Output() getMetadata = new EventEmitter<null>();
  userCurrentIndex = computed(() => {
    const metadata = this.metadata();
    if (!metadata) {
      return 0;
    }
    return metadata.current_index + 1;
  });

  async handleWheel(event: WheelEvent): Promise<void> {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    if (event.deltaY < 0) {
      dicomViewer.render_next_file();
    } else {
      dicomViewer.render_previous_file();
    }
    this.getMetadata.emit();
  }
}
