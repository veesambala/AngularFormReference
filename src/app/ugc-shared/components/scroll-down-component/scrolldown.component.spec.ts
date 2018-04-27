import { TestBed, async } from '@angular/core/testing';
import { ScrolldownComponent } from './scrolldown.component';
describe(' ScrolldownComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScrolldownComponent
      ],
    }).compileComponents();
  }));
  it('should create the  ScrolldownComponent', async(() => {
    const fixture = TestBed.createComponent(ScrolldownComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
