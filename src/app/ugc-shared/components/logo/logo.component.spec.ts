import { TestBed, async } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
describe('logoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogoComponent
      ],
    }).compileComponents();
  }));
  it('should create the logo Component', async(() => {
    const fixture = TestBed.createComponent(LogoComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
