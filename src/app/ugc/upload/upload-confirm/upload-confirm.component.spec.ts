import { TestBed, async } from '@angular/core/testing';
import { UploadConfirmComponent } from './upload-confirm.component';
describe('UploadConfirmComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadConfirmComponent
      ],
    }).compileComponents();
  }));
  it('should create the call-to-action component', async(() => {
    const fixture = TestBed.createComponent(UploadConfirmComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
