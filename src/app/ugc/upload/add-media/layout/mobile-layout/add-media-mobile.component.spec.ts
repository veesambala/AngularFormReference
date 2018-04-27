import { TestBed, async } from '@angular/core/testing';
import { UploadAddMediaMobileComponent } from './upload-add-media-mobile.component';
describe('UploadAddMediaMobileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadAddMediaMobileComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadAddMediaMobileComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadAddMediaMobileComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
