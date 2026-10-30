import {
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DicomViewer,
  initDicomViewerRs,
  MetaData,
} from '../../../../libs/dicom-viewer-rs/public-api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DicomTreeComponent } from './components/dicom-tree/dicom-tree.component';
import { DicomHierarchy } from './models/dicom-hierarchy.model';
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
  metaData: WritableSignal<MetaData | null> = signal(null);
  dicomHierarchy: WritableSignal<DicomHierarchy | null> = signal(null);
  private _snackBar = inject(MatSnackBar);
  private taskQueue = inject(WasmTaskQueue);

  async ngOnInit() {
    await initDicomViewerRs();
    this.dicomViewer.set(DicomViewer.new());
    this.metaData.set(MetaData.new());
  }

  async setSeriesFilter(seriesInstanceUid: string) {
    const metadata = await this.taskQueue.run(async () => {
      const dicomViewer = this.dicomViewer();
      if (!dicomViewer) {
        return null;
      }
      await dicomViewer.set_current_series_instance_uid(seriesInstanceUid);
      return dicomViewer.get_metadata();
    });
    if (metadata) {
      this.metaData.set(metadata);
    }
  }

  public openSnackBar(event: {message: string, action: string}) {
    this._snackBar.open(event.message, event.action, { duration: 3000 });
  }

  async getMetaData() {
    const metadata = await this.taskQueue.run(
      () => this.dicomViewer()?.get_metadata() ?? null
    );
    if (metadata) {
      this.metaData.set(metadata);
    }
  }
}
