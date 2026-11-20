import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  Signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTree, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DicomHierarchy, Patient, Serie, Study } from '../../models/dicom-hierarchy.model';

interface DicomNode {
  label: string;
  key: string;
  type: string;
  children?: DicomNode[];
}

@Component({
  selector: 'dicom-tree',
  imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './dicom-tree.component.html',
  styleUrl: './dicom-tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DicomTreeComponent {
  @Input({ required: true }) dicomHierarchy!: Signal<DicomHierarchy | null>;
  @Output() setSeriesFilter = new EventEmitter<string>();
  @Output() resetFilter = new EventEmitter<null>();
  @ViewChild(MatTree) tree!: MatTree<DicomNode>;
  selectedKey: string | null = null;

  data = computed<DicomNode[]>(() => {
    const dicomHierarchy = this.dicomHierarchy();
    if (!dicomHierarchy?.patients) {
      return [];
    }
    const dicomNodes = Array.from(
      dicomHierarchy?.patients.entries(),
      ([key, value]: [string, Patient]): DicomNode => {
        return {
          label: `${key}`,
          key: key,
          type: "Name",
          children: Array.from(
            value.studies.entries(),
            ([studyKey, studyValue]: [string, Study]): DicomNode => {
              return {
                label: `${studyKey}`,
                key: studyKey,
                type: "Study",
                children: Array.from(
                  studyValue?.series.entries(),
                  ([seriesKey, seriesValue]: [string, Serie]): DicomNode => {
                    // Group instances by acquisition number
                    const acquisitionGroups = new Map<string, any[]>();

                    if (seriesValue.instances instanceof Map) {
                      seriesValue.instances.forEach((instance: any) => {
                        const acqNum = instance.acquisition_number || 'Unknown';
                        if (!acquisitionGroups.has(acqNum)) {
                          acquisitionGroups.set(acqNum, []);
                        }
                        acquisitionGroups.get(acqNum)?.push(instance);
                      });
                    }

                    // If multiple acquisition numbers exist, create sub-nodes
                    if (acquisitionGroups.size > 1) {
                      return {
                        label: `${seriesValue.series_date} ${seriesValue.series_time} ${seriesValue.modality} ${seriesValue.body_part_examined}`,
                        key: seriesKey,
                        type: 'Series',
                        children: Array.from(acquisitionGroups.entries())
                          .sort(([acqKeyA], [acqKeyB]) => {
                            return Number(acqKeyA) - Number(acqKeyB);
                          })
                          .map(([acqKey, instances]): DicomNode => {
                            return {
                              label: `Acquisition ${acqKey}`,
                              key: `${seriesKey}_acq_${acqKey}`,
                              type: 'Acquisition',
                              children: Array.isArray(seriesValue.instances) ? seriesValue.instances : [],
                            };
                          }),
                      };
                    } else {
                      // Single acquisition or no acquisition number
                      return {
                        label: `${seriesValue.series_date} ${seriesValue.series_time} ${seriesValue.modality} ${seriesValue.body_part_examined}`,
                        key: seriesKey,
                        type: 'Series',
                        children: Array.isArray(seriesValue.instances) ? seriesValue.instances : [],
                      };
                    }
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

  handleNodeClick(nodeKey: string): void {
    this.selectedKey = nodeKey;
    this.setSeriesFilter.emit(nodeKey);
  }

  handleResetFilterClick(): void {
    this.selectedKey = null;
    this.resetFilter.emit();
  }

  childrenAccessor = (node: DicomNode) => node.children ?? [];

  hasChild = (_: number, node: DicomNode) =>
    !!node.children && node.children.length > 0;
}
