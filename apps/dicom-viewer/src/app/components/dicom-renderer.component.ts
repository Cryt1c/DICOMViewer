import { Component, computed, EventEmitter, Input, Output, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { DicomViewer, MetaData } from '../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';

@Component({
  selector: 'dicom-renderer',
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, MatSliderModule, NgIf],
  templateUrl: './dicom-renderer.component.html',
  styleUrl: './dicom-renderer.component.scss',
})
export class DicomRendererComponent {
  @Input({ required: true }) dicomViewer!: Signal<DicomViewer | null>;
  @Input({ required: true }) metadata!: Signal<MetaData | null>;
  @Output() getMetadata = new EventEmitter<null>();
  currentIndex = computed(() => {
    const metadata = this.metadata();
    if (!metadata) {
      return 0;
    }
    return metadata.current_index + 1;
  });

  onInputChange(event: Event) {
    const index = parseInt((event.target as HTMLInputElement).value);
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    dicomViewer.render_image_at_index(index - 1);
    this.getMetadata.emit();
  }

  async handleWheel(event: WheelEvent): Promise<void> {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    if (event.deltaY < 0) {
      dicomViewer.render_previous_file();
    } else {
      dicomViewer.render_next_file();
    }
    this.getMetadata.emit();
  }
}
