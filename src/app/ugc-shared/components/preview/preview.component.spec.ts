import { TestBed, async } from '@angular/core/testing';
import { PreviewComponent } from './preview.component';
describe('previewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PreviewComponent
      ],
    }).compileComponents();
  }));
  it('should create the previewComponent', async(() => {
    const fixture = TestBed.createComponent(PreviewComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
