import { TestBed, async } from '@angular/core/testing';
import { MediaUserInfoContainerComponent } from './media-user-info-container.component';
describe('MediaUserInfoContainerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MediaUserInfoContainerComponent
      ],
    }).compileComponents();
  }));
  it('should create the MediaUserInfoContainerComponent component', async(() => {
    const fixture = TestBed.createComponent(MediaUserInfoContainerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});