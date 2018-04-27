import { TestBed, async } from '@angular/core/testing';
import { DesktopBackgroundComponent } from './desktop-background.component';

describe('DesktopBackgroundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesktopBackgroundComponent
      ],
    }).compileComponents();
  }));
  it('should create the poweredBy component', async(() => {
    const fixture = TestBed.createComponent(DesktopBackgroundComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
