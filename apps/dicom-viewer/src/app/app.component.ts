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
  opened: boolean = false;

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

  async loadFilesFromPublic(): Promise<void> {
    this.loading.set(true);
    const fileNames = ['image-000001.dcm', 'image-000003.dcm', 'image-000005.dcm', 'image-000007.dcm', 'image-000009.dcm', 'image-000011.dcm', 'image-000013.dcm', 'image-000015.dcm', 'image-000017.dcm', 'image-000019.dcm', 'image-000021.dcm', 'image-000023.dcm', 'image-000002.dcm', 'image-000004.dcm', 'image-000006.dcm', 'image-000008.dcm', 'image-000010.dcm', 'image-000012.dcm', 'image-000014.dcm', 'image-000016.dcm', 'image-000018.dcm', 'image-000020.dcm', 'image-000022.dcm', 'image-000024.dcm']
    const files = await Promise.all(fileNames.map(async (fileName) => {
      const response: Response = await fetch(`dicom/${fileName}`);
      return await response.blob();
    }));
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
    this.loadFilesInWasm(loadedFiles);
  }

  async handleFiles(event: Event): Promise<void> {
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
    this.loadFilesInWasm(loadedFiles);
  }

  loadFilesInWasm(loadedFiles: Uint8Array<ArrayBufferLike>[]) {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    try {
      const start = performance.now();
      dicomViewer.read_files(loadedFiles);
      const end = performance.now();
      console.log("dicomViewer.read_files ", end - start, "ms");
      dicomViewer.render_image_at_index(0);
      let dicomHierarchy: DicomHierarchy = dicomViewer.get_dicom_hierarchy();
      this.dicomHierarchy.set(dicomHierarchy);
      this.getMetadata();
      this.openSnackBar('✅ ' + this.metadata()?.total + ' files successfully loaded', 'Close');
      this.opened = true;
    } catch (error: any) {
      console.log("error ", error);
      this.dicomHierarchy.set(null);
      this.getMetadata();
      this.openSnackBar('⚠️ Could not load files: ' + error.message, 'Close');
    } finally {
      this.loading.set(false);
    }
  }
}
