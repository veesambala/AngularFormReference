import { TestBed, async } from '@angular/core/testing';
import { UploadInProgressContainerComponent } from './upload-in-progress-container.component';
describe('UploadInProgressContainerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadInProgressContainerComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadAddMediaComponent component', async(() => {
    const fixture = TestBed.createComponent(UploadInProgressContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
