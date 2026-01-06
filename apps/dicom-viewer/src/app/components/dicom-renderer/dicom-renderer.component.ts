import { Component, computed, EventEmitter, Input, Output, Signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { DicomViewer, MetaData, WasmOrientation as Orientation } from '../../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';

@Component({
  selector: 'dicom-renderer',
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, MatSliderModule, NgIf, MatSelectModule],
  templateUrl: './dicom-renderer.component.html',
  styleUrl: './dicom-renderer.component.scss',
})
export class DicomRendererComponent {
  @Input({ required: true }) dicomViewer!: Signal<DicomViewer | null>;
  @Input({ required: true }) metaData!: Signal<MetaData | null>;
  @Output() getMetaData = new EventEmitter<null>();
  currentIndex = computed(() => {
    const metaData = this.metaData();
    console.log("asdf metaData ", metaData);
    if (!metaData) {
      return 0;
    }
    return metaData.current_index + 1;
  });
  mprOrientation = Orientation.Axial;
  isScrollingBlocked = false;

  onInputChange(event: Event) {
    const index = parseInt((event.target as HTMLInputElement).value);
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    dicomViewer.render_image_at_index(index - 1);
    this.getMetaData.emit();
  }

  async handleWheel(event: WheelEvent): Promise<void> {
    event.preventDefault();
    if(this.isScrollingBlocked) {
      return;
    }
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    this.isScrollingBlocked = true;
    if (event.deltaY < 0) {
      await dicomViewer.render_previous_file();
    } else {
      await dicomViewer.render_next_file();
    }
    this.getMetaData.emit();
    this.isScrollingBlocked = false;
  }

    onMprOrientationChange(event: MatSelectChange) {
    const dicomViewer = this.dicomViewer();
    if (dicomViewer) {
      dicomViewer.set_mpr_orientation(event.value);
      this.getMetaData.emit();
    }
  }
}
