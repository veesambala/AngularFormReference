import { TestBed, async } from '@angular/core/testing';
import { UploadSuccessContainerComponent } from './upload-success-container.component';
describe('UploadSuccessContainerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadSuccessContainerComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadSuccessContainerComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadSuccessContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
