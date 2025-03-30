import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  Signal,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTree, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface DicomNode {
  name: string;
  children?: DicomNode[];
}

@Component({
  selector: 'dicom-tree',
  imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './dicom-tree.component.html',
  styleUrl: './dicom-tree.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DicomTreeComponent {
  @Input({ required: true }) dicomHierarchy!: Signal<any | null>;
  @Output() instanceSelected = new EventEmitter<string>();
  @ViewChild(MatTree) tree!: MatTree<DicomNode>;

  data = computed<DicomNode[]>(() => {
    const dicomHierarchy = this.dicomHierarchy();
    if (!dicomHierarchy?.patients) {
      return [];
    }
    console.log(dicomHierarchy);
    const dicomNodes = Array.from(
      dicomHierarchy?.patients.entries(),
      ([key, value]: [string, any]): DicomNode => {
        return {
          name: key,
          children: Array.from(
            value.studies.entries(),
            ([studyKey, studyValue]: [string, any]): DicomNode => {
              return {
                name: studyKey,
                children: Array.from(
                  studyValue?.series.entries(),
                  ([seriesKey, seriesValue]: [string, any]): DicomNode => {
                    return {
                      name: seriesKey,
                      children: Array.isArray(seriesValue) ? seriesValue : [],
                    };
                  }
                ),
              };
            }
          ),
        };
      }
    );
    setTimeout(() => {
      this.tree.expandAll();
    });
    return dicomNodes;
  });

  handleNodeClick(nodeName: string): void {
    console.log('Node clicked:', nodeName);
    this.instanceSelected.emit(nodeName);
  }

  childrenAccessor = (node: DicomNode) => node.children ?? [];

  hasChild = (_: number, node: DicomNode) =>
    !!node.children && node.children.length > 0;
}
