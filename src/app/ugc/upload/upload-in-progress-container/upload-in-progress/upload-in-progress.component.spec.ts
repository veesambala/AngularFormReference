import { TestBed, async } from '@angular/core/testing';
import { UploadInProgressComponent } from './upload-in-progress.component';
describe('UploadInProgressComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadInProgressComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadInProgressComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadInProgressComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
