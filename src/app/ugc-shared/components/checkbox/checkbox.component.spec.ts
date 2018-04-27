import { TestBed, async } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
describe('checkboxComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxComponent
      ],
    }).compileComponents();
  }));
  it('should create the checkboxComponent', async(() => {
    const fixture = TestBed.createComponent(CheckboxComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
