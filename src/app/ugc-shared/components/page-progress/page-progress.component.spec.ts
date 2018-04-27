import { TestBed, async } from '@angular/core/testing';
import { PageProgressComponent } from './page-progress.component';
describe('pageProgressComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageProgressComponent
      ],
    }).compileComponents();
  }));
  it('should create the pageProgressComponent', async(() => {
    const fixture = TestBed.createComponent(PageProgressComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
