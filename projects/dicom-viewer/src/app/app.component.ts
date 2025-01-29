import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DicomViewer, initDicomViewerRs, setConsoleErrorPanicHook } from '../public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dicom-viewer';
  dicomViewer: DicomViewer | null = null;

  async ngOnInit() {
    await initDicomViewerRs();
    setConsoleErrorPanicHook();
    this.dicomViewer = DicomViewer.new();
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
    console.log(loadedFiles);
    this.dicomViewer.read_files(loadedFiles);
    this.dicomViewer.render_file_at_index(0);
  }
}
