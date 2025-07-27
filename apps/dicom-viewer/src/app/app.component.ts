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

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, DicomTreeComponent, DicomRendererComponent, MatSidenavModule, ImagePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DICOMViewer';
  dicomViewer: WritableSignal<DicomViewer | null> = signal(null);
  metadata: WritableSignal<MetaData | null> = signal(null);
  dicomHierarchy: WritableSignal<DicomHierarchy | null> = signal(null);
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

  public openSnackBar(event: {message: string, action: string}) {
    this._snackBar.open(event.message, event.action, { duration: 3000 });
  }

  getMetadata() {
    const dicomViewer = this.dicomViewer();
    if (!dicomViewer) {
      return;
    }
    let metadata = dicomViewer.get_metadata();
    this.metadata.set(metadata);
  }

}
