import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'drag-and-drop',
  imports: [CommonModule],
  templateUrl: './drag-and-drop.html',
  styleUrl: './drag-and-drop.css',
})
export class DragAndDropComponent {
  supportsFileSystemAccessAPI = 'getAsFileSystemHandle' in DataTransferItem.prototype;
  supportsWebkitGetAsEntry = 'webkitGetAsEntry' in DataTransferItem.prototype;

  @ViewChild('dragAndDrop') dragAndCrop!: ElementRef;
  @Output() handleFiles = new EventEmitter<File[]>();

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  async onDrop(event: DragEvent) {
    event.preventDefault();

    const items = Array.from(event.dataTransfer?.items || []);
    const fileHandlesPromises = items
      .filter((item) => item.kind === 'file')
      .map((item) =>
        this.supportsFileSystemAccessAPI
          ? (item as any).getAsFileSystemHandle()
          : this.supportsWebkitGetAsEntry
          ? (item as any).webkitGetAsEntry()
          : item.getAsFile()
      );

    const files: File[] = [];

    for await (const handle of fileHandlesPromises) {
      if (handle.kind === 'directory' || handle.isDirectory) {
        console.log(`Directory: ${handle.name}`);
      } else if (handle.name) {
        const file = await handle.getFile();
        files.push(file);
        console.log(`File: ${handle.name}`);
      } else if (handle instanceof File) {
        files.push(handle);
        console.log(`File instance: ${handle.name}`);
      } else {
        console.log(`Unknown entry:`, handle);
      }
    }

    this.handleFiles.emit(files);
  }

}
