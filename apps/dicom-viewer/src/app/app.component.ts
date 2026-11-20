import {
  Component,
  HostListener,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DicomViewer,
  initDicomViewerRs,
} from '../../../../libs/dicom-viewer-rs/public-api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DicomTreeComponent } from './components/dicom-tree/dicom-tree.component';
import { DicomHierarchy } from './models/dicom-hierarchy.model';
import { ViewerMetadata } from './models/viewer-metadata.model';
import { DicomRendererComponent } from './components/dicom-renderer/dicom-renderer.component';
import { ImagePickerComponent } from './components/image-picker/image-picker';
import { WasmTaskQueue } from './services/wasm-task-queue';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, DicomTreeComponent, DicomRendererComponent, MatSidenavModule, ImagePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DICOMViewer';
  dicomViewer: WritableSignal<DicomViewer | null> = signal(null);
  metaData: WritableSignal<ViewerMetadata | null> = signal(null);
  dicomHierarchy: WritableSignal<DicomHierarchy | null> = signal(null);
  isFullscreen: WritableSignal<boolean> = signal(false);
  private _snackBar = inject(MatSnackBar);
  private taskQueue = inject(WasmTaskQueue);

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.target instanceof HTMLInputElement) {
      return;
    }
    if (event.key === 'f' || event.key === 'F') {
      this.toggleFullscreen();
    } else if (event.key === 'Escape' && this.isFullscreen()) {
      this.isFullscreen.set(false);
    }
  }

  toggleFullscreen() {
    this.isFullscreen.update((v) => !v);
  }

  async ngOnInit() {
    await initDicomViewerRs();
    this.dicomViewer.set(DicomViewer.new());
  }

  async setSeriesFilter(seriesInstanceUid: string) {
    const metadata: ViewerMetadata | null = await this.taskQueue.run(
      async () => {
        const dicomViewer = this.dicomViewer();
        if (!dicomViewer) {
          return null;
        }
        return dicomViewer.set_current_series_instance_uid(seriesInstanceUid);
      }
    );
    if (metadata) {
      this.metaData.set(metadata);
    }
  }

  public openSnackBar(event: {message: string, action: string}) {
    this._snackBar.open(event.message, event.action, { duration: 3000 });
  }

  onMetadata(metadata: ViewerMetadata) {
    this.metaData.set(metadata);
  }
}
