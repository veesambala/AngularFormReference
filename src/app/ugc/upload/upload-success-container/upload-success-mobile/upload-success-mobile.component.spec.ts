import { TestBed, async } from '@angular/core/testing';
import { UploadSuccessMobileComponent } from './upload-success-mobile.component';
describe('UploadSuccessMobileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadSuccessMobileComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadSuccessMobileComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadSuccessMobileComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
