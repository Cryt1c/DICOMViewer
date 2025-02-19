import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DicomViewer, initDicomViewerRs, setConsoleErrorPanicHook } from '../../../dicom-viewer-rs/public-api';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DicomViewer';
  dicomViewer: DicomViewer | null = null;
  private _snackBar = inject(MatSnackBar);

  async ngOnInit() {
    await initDicomViewerRs();
    setConsoleErrorPanicHook();
    this.dicomViewer = DicomViewer.new();
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  async handleWheel(event: WheelEvent): Promise<void> {
    if (!this.dicomViewer) {
      return
    }
    if (event.deltaY < 0) {
      console.log("next");
      this.dicomViewer.render_next_file();
    } else {
      console.log("previous");
      this.dicomViewer.render_previous_file();
    }
  }

  async handleFiles(event: Event): Promise<void> {
    if (!this.dicomViewer) {
      return
    }
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files || []);
    const filesPromise = Array.from(files).map((file: Blob) => {
      const fileReader = new FileReader();
      return new Promise<Uint8Array>((resolve, reject) => {
        fileReader.onload = () => {
          if (fileReader.result instanceof ArrayBuffer) {
            resolve(new Uint8Array(fileReader.result));
          }
          else {
            reject(new Error("Failed to read file as Arraybuffer"));
          }
        }
        fileReader.onerror = () => {
          reject(fileReader.error);
        }
        fileReader.readAsArrayBuffer(file);
      });
    });
    const loadedFiles = await Promise.all(filesPromise);

    try {
      this.dicomViewer.read_files(loadedFiles);
    }
    catch (error: any) {
      this.openSnackBar("⚠️ Could not load files: " + error.message, "Close")
      return;
    }
    this.openSnackBar("✅ Files successfully loaded", "Close")
    this.dicomViewer.render_file_at_index(0);
  }
}
