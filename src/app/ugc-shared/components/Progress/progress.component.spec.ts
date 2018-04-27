import { TestBed, async } from '@angular/core/testing';
import { ProgressComponent } from './progress.component';
describe('progressComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgressComponent
      ],
    }).compileComponents();
  }));
  it('should create the progressComponent', async(() => {
    const fixture = TestBed.createComponent(ProgressComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
