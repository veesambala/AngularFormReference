import { TestBed, async } from '@angular/core/testing';
import { UploadTermsConditionsComponent } from './upload-terms-conditions.component';
describe('UploadTermsConditionsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadTermsConditionsComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadTermsConditionsComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadTermsConditionsComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
