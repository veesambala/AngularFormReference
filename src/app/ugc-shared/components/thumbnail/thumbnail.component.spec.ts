import { TestBed, async } from '@angular/core/testing';
import { ThumbnailComponent } from './thumbnail.component';
describe(' thumbnailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ThumbnailComponent
      ],
    }).compileComponents();
  }));
  it('should create the  ThumbnailComponent', async(() => {
    const fixture = TestBed.createComponent(ThumbnailComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
