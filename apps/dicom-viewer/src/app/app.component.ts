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
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { DicomTreeComponent } from './components/dicom-tree/dicom-tree.component';
import { DicomHierarchy } from './models/dicom-hierarchy.model';
import { DicomRendererComponent } from './components/dicom-renderer/dicom-renderer.component';

@Component({
  selector: 'app-root',
  imports: [MatProgressSpinnerModule, RouterOutlet, MatButtonModule, NgIf, DicomTreeComponent, DicomRendererComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DICOMViewer';
  dicomViewer: WritableSignal<DicomViewer | null> = signal(null);
  metadata: WritableSignal<MetaData | null> = signal(null);
  dicomHierarchy: WritableSignal<DicomHierarchy | null> = signal(null);
  loading: WritableSignal<boolean | null> = signal(false);
  private _snackBar = inject(MatSnackBar);

  async ngOnInit() {
    await initDicomViewerRs();
    this.dicomViewer.set(DicomViewer.new());
    this.metadata.set(MetaData.new());
  }

  setSeriesFilter(seriesInstanceUid: string) {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    dicomViewer.set_current_series_instance_uid(seriesInstanceUid);
    this.getMetadata();
  }

  resetFilter() {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    dicomViewer.reset_filter();
    this.getMetadata();
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  getMetadata() {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    let metadata = dicomViewer.get_metadata();
    this.metadata.set(metadata);
  }

  async handleFiles(event: Event): Promise<void> {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    this.loading.set(true);
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files || []);
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
    } catch (error: any) {
      this.openSnackBar('⚠️ Could not load files: ' + error.message, 'Close');
      return;
    }
    this.getMetadata();
    this.loading.set(false);
    this.openSnackBar('✅ ' + this.metadata()?.total + ' files successfully loaded', 'Close');
    dicomViewer.render_image_at_index(0);
    let dicomHierarchy: DicomHierarchy = dicomViewer.get_dicom_hierarchy();
    this.dicomHierarchy.set(dicomHierarchy);
  }
}
