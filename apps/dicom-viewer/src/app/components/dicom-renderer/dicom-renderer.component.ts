import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  Input,
  Output,
  Signal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  DicomViewer,
  MetaData,
  WasmOrientation as Orientation,
} from '../../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';
import { WasmTaskQueue } from '../../services/wasm-task-queue';

@Component({
  selector: 'dicom-renderer',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSliderModule,
    MatSelectModule,
  ],
  templateUrl: './dicom-renderer.component.html',
  styleUrl: './dicom-renderer.component.scss',
})
export class DicomRendererComponent {
  @Input({ required: true }) dicomViewer!: Signal<DicomViewer | null>;
  @Input({ required: true }) metaData!: Signal<MetaData | null>;
  @Output() getMetaData = new EventEmitter<null>();
  currentIndex = computed(() => {
    const metaData = this.metaData();
    if (!metaData) {
      return 0;
    }
    return metaData.current_index + 1;
  });
  mprOrientation = Orientation.Axial;
  isScrollingBlocked = false;
  // Index requested by the slider that has not been rendered yet. Slider
  // drags fire far more events than the GPU can render, so only the most
  // recent one is kept instead of queueing every intermediate slice.
  private pendingIndex: number | null = null;
  private isRenderLoopRunning = false;
  computeBackend = signal<'cpu' | 'gpu'>('gpu');
  private snackBar = inject(MatSnackBar);
  private taskQueue = inject(WasmTaskQueue);
  private gpuAvailabilityChecked = false;

  constructor() {
    effect(() => {
      const dicomViewer = this.dicomViewer();
      const metaData = this.metaData();
      if (this.gpuAvailabilityChecked || !dicomViewer || !metaData?.total) {
        return;
      }
      this.gpuAvailabilityChecked = true;
      void this.checkGpuAvailability();
    });
  }

  private async checkGpuAvailability() {
    if (await this.hasWebGpuAdapter()) {
      return;
    }
    this.computeBackend.set('cpu');
    this.notifyGpuUnavailable();
  }

  private async hasWebGpuAdapter(): Promise<boolean> {
    const gpu = (
      navigator as Navigator & {
        gpu?: { requestAdapter(): Promise<unknown | null> };
      }
    ).gpu;
    if (!gpu) {
      return false;
    }
    try {
      return (await gpu.requestAdapter()) !== null;
    } catch {
      return false;
    }
  }

  private notifyGpuUnavailable() {
    this.snackBar.open(
      'GPU interpolation is not available. Using CPU.',
      'Close',
      { duration: 3000 }
    );
  }

  onInputChange(event: Event) {
    const index = parseInt((event.target as HTMLInputElement).value);
    if (!this.dicomViewer()) {
      return;
    }
    this.pendingIndex = index - 1;
    void this.renderPendingIndex();
  }

  private async renderPendingIndex(): Promise<void> {
    if (this.isRenderLoopRunning) {
      return;
    }
    this.isRenderLoopRunning = true;
    try {
      while (this.pendingIndex !== null) {
        const index = this.pendingIndex;
        this.pendingIndex = null;
        await this.taskQueue.run(async () => {
          await this.dicomViewer()?.render_image_at_index(index);
        });
        this.getMetaData.emit();
      }
    } finally {
      this.isRenderLoopRunning = false;
    }
  }

  async handleWheel(event: WheelEvent): Promise<void> {
    event.preventDefault();
    if (this.isScrollingBlocked) {
      return;
    }
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    this.isScrollingBlocked = true;
    try {
      await this.taskQueue.run(() =>
        event.deltaY < 0
          ? dicomViewer.render_previous_file()
          : dicomViewer.render_next_file()
      );
      this.getMetaData.emit();
    } finally {
      this.isScrollingBlocked = false;
    }
  }

  async onMprOrientationChange(event: MatSelectChange) {
    if (!this.dicomViewer()) {
      return;
    }
    await this.taskQueue.run(async () => {
      await this.dicomViewer()?.set_mpr_orientation(event.value);
    });
    this.getMetaData.emit();
  }

  async toggleComputeBackend(): Promise<void> {
    if (!this.dicomViewer()) {
      return;
    }

    const enableGpu = this.computeBackend() === 'cpu';
    const gpuActive = await this.taskQueue.run(() =>
      this.dicomViewer()!.set_use_gpu(enableGpu)
    );
    this.computeBackend.set(gpuActive ? 'gpu' : 'cpu');
    if (enableGpu && !gpuActive) {
      this.notifyGpuUnavailable();
    }
    this.getMetaData.emit();
  }
}
