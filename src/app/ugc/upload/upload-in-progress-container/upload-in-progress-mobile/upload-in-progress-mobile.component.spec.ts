import { TestBed, async } from '@angular/core/testing';
import { UploadInProgressMobileComponent } from './upload-in-progress-mobile.component';
describe('UploadInProgressMobileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadInProgressMobileComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadInProgressMobileComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadInProgressMobileComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
