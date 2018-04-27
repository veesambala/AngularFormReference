import { TestBed, async } from '@angular/core/testing';
import { UploadTermsConditionsMobileComponent } from './upload-terms-conditions-mobile.component';
describe('UploadTermsConditionsMobileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadTermsConditionsMobileComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadTermsConditionsMobileComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadTermsConditionsMobileComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
