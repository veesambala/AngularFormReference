import { TestBed, async } from '@angular/core/testing';
import { UploadSuccessComponent } from './upload-success.component';
describe('UploadSuccessComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadSuccessComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadSuccessComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadSuccessComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
