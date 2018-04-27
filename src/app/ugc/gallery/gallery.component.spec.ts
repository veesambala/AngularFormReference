import { TestBed, async } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
describe('galleryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryComponent
      ],
    }).compileComponents();
  }));
  it('should create the gallery component', async(() => {
    const fixture = TestBed.createComponent(GalleryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
