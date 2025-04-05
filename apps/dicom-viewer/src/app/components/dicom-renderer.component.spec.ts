import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DicomRendererComponent } from './dicom-renderer.component';

describe('DicomRendererComponent', () => {
  let component: DicomRendererComponent;
  let fixture: ComponentFixture<DicomRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicomRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DicomRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
