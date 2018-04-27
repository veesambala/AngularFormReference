import { TestBed, async } from '@angular/core/testing';
import { UploadUserInfoMobileComponent } from './upload-user-info-mobile.component';
describe('UploadUserInfoMobileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadUserInfoMobileComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadUserInfoMobileComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadUserInfoMobileComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
