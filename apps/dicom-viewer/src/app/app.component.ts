import {
  Component,
  computed,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DicomViewer,
  initDicomViewerRs,
  MetaData,
  setConsoleErrorPanicHook,
} from '../../../../libs/dicom-viewer-rs/public-api';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { DicomTreeComponent } from './components/dicom-tree.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NgIf, DicomTreeComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DicomViewer';
  dicomViewer: DicomViewer | null = null;
  private _snackBar = inject(MatSnackBar);
  metadata: WritableSignal<MetaData | null> = signal(null);
  dicomHierarchy: WritableSignal<Object | null> = signal(null);
  userCurrentIndex = computed(() => {
    const metadata = this.metadata();
    if (!metadata) {
      return 0;
    }
    return metadata.current_index + 1;
  });

  async ngOnInit() {
    await initDicomViewerRs();
    setConsoleErrorPanicHook();
    this.dicomViewer = DicomViewer.new();
    this.metadata.set(MetaData.new());
  }

  renderInstance(instanceId: string) {
    if (!this.dicomViewer) {
      return;
    }
    this.dicomViewer.render_file_by_series_instance_uid(instanceId);
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  async handleWheel(event: WheelEvent): Promise<void> {
    if (!this.dicomViewer) {
      return;
    }
    if (event.deltaY < 0) {
      this.dicomViewer.render_next_file();
    } else {
      this.dicomViewer.render_previous_file();
    }
    this.updateCurrentIndex();
  }

  private updateCurrentIndex() {
    if (!this.dicomViewer) {
      return;
    }
    let metadata = this.dicomViewer.get_metadata();
    this.metadata.set(metadata);
    let dicomHierarchy = this.dicomViewer.get_dicom_hierarchy();
    this.dicomHierarchy.set(dicomHierarchy);
  }

  async handleFiles(event: Event): Promise<void> {
    if (!this.dicomViewer) {
      return;
    }
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
      this.dicomViewer.read_files(loadedFiles);
    } catch (error: any) {
      this.openSnackBar('⚠️ Could not load files: ' + error.message, 'Close');
      return;
    }
    this.updateCurrentIndex();
    const total = this.metadata()?.total;
    this.openSnackBar('✅ ' + total + ' files successfully loaded', 'Close');
    this.dicomViewer.render_file_at_index(0);
  }
}
