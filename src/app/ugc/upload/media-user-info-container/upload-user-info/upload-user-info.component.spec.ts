import { TestBed, async } from '@angular/core/testing';
import { UploadUserInfoComponent } from './upload-user-info.component';
describe('UploadUserInfoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadUserInfoComponent
      ],
    }).compileComponents();
  }));
  it('should create the call-to-action component', async(() => {
    const fixture = TestBed.createComponent(UploadUserInfoComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
