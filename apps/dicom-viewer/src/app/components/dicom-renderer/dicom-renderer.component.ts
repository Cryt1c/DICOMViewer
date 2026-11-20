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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {
  DicomViewer,
  WasmOrientation as Orientation,
} from '../../../../../../dist/dicom-viewer-rs/dicom_viewer_rs';
import { GpuUpdate, ViewerMetadata } from '../../models/viewer-metadata.model';
import { WasmTaskQueue } from '../../services/wasm-task-queue';

@Component({
  selector: 'dicom-renderer',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSliderModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './dicom-renderer.component.html',
  styleUrl: './dicom-renderer.component.scss',
})
export class DicomRendererComponent {
  @Input({ required: true }) dicomViewer!: Signal<DicomViewer | null>;
  @Input({ required: true }) metaData!: Signal<ViewerMetadata | null>;
  @Input() isFullscreen = false;
  @Output() metadataChange = new EventEmitter<ViewerMetadata>();
  @Output() fullscreenToggle = new EventEmitter<null>();
  readonly orientation = Orientation;
  currentIndex = computed(() => {
    const metaData = this.metaData();
    if (!metaData) {
      return 0;
    }
    return metaData.currentIndex + 1;
  });
  isScrollingBlocked = false;
  // Index requested by the slider that has not been rendered yet. Slider
  // drags fire far more events than the GPU can render, so only the most
  // recent one is kept instead of queueing every intermediate slice.
  private pendingIndex: number | null = null;
  private isRenderLoopRunning = false;
  computeBackend = signal<'cpu' | 'gpu'>('gpu');
  // The switch is disabled (greyed out) when WebGPU is not usable, with a
  // tooltip explaining why.
  gpuAvailable = signal(false);
  readonly gpuUnavailableTooltip =
    'GPU interpolation is not available (WebGPU required). Using the CPU.';
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
    const available = await this.hasWebGpuAdapter();
    this.gpuAvailable.set(available);
    if (available) {
      return;
    }
    this.computeBackend.set('cpu');
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
      'GPU interpolation could not be initialised. Using CPU.',
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
        const metadata: ViewerMetadata | null = await this.taskQueue.run(
          () => this.dicomViewer()?.render_image_at_index(index) ?? null
        );
        if (metadata) {
          this.metadataChange.emit(metadata);
        }
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
      const metadata: ViewerMetadata = await this.taskQueue.run(() =>
        event.deltaY < 0
          ? dicomViewer.render_previous_file()
          : dicomViewer.render_next_file()
      );
      this.metadataChange.emit(metadata);
    } finally {
      this.isScrollingBlocked = false;
    }
  }

  async onMprOrientationChange(event: MatSelectChange) {
    if (!this.dicomViewer()) {
      return;
    }
    const metadata: ViewerMetadata | null = await this.taskQueue.run(
      () => this.dicomViewer()?.set_mpr_orientation(event.value) ?? null
    );
    if (metadata) {
      this.metadataChange.emit(metadata);
    }
  }

  async toggleComputeBackend(): Promise<void> {
    if (!this.dicomViewer()) {
      return;
    }

    const enableGpu = this.computeBackend() === 'cpu';
    const { gpuActive, metadata }: GpuUpdate = await this.taskQueue.run(() =>
      this.dicomViewer()!.set_use_gpu(enableGpu)
    );
    this.computeBackend.set(gpuActive ? 'gpu' : 'cpu');
    if (enableGpu && !gpuActive) {
      this.gpuAvailable.set(false);
      this.notifyGpuUnavailable();
    }
    this.metadataChange.emit(metadata);
  }
}
