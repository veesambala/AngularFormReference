import { TestBed, async } from '@angular/core/testing';
import { UploadComponent } from './upload.component';
describe('UploadComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadComponent', async(() => {
    const fixture = TestBed.createComponent(UploadComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
