import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePickerComponent } from './image-picker';

describe('ImagePickerComponent', () => {
  let component: ImagePickerComponent;
  let fixture: ComponentFixture<ImagePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
