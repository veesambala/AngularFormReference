import { TestBed, async } from '@angular/core/testing';
import { UploadProgressComponent } from './upload-progress.component';
describe('UploadProgressComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadProgressComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadProgressComponent', async(() => {
    const fixture = TestBed.createComponent(UploadProgressComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
