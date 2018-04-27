import { TestBed, async } from '@angular/core/testing';
import { SplashComponent } from './splash.component';
describe('SplashComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SplashComponent
      ],
    }).compileComponents();
  }));
  it('should create the splash component', async(() => {
    const fixture = TestBed.createComponent(SplashComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
