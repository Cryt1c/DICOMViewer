import { ChangeDetectionStrategy, Component, computed, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
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
                      children: Array.isArray(seriesValue) ? seriesValue : []
                    };
                  }
                )
              };
            }
          )
        };
      }
    );
    return dicomNodes;
  });

  childrenAccessor = (node: DicomNode) => node.children ?? [];

  hasChild = (_: number, node: DicomNode) => !!node.children && node.children.length > 0;
}
