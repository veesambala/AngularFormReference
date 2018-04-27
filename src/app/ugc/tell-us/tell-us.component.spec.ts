import { TestBed, async } from '@angular/core/testing';
import { TellUsComponent } from './tell-us.component';
describe('TellUsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TellUsComponent
      ],
    }).compileComponents();
  }));
  it('should create the TellUsComponent', async(() => {
    const fixture = TestBed.createComponent(TellUsComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
