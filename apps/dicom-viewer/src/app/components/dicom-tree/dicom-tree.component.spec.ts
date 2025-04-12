import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DicomTreeComponent } from './dicom-tree.component';

describe('DicomTreeComponent', () => {
  let component: DicomTreeComponent;
  let fixture: ComponentFixture<DicomTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicomTreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DicomTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
