import { TestBed, async } from '@angular/core/testing';
import { AddMediaComponent } from './add-media.component';
describe('AddMediaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddMediaComponent
      ],
    }).compileComponents();
  }));
  it('should create the UploadAddMediaComponent component', async(() => {
    const fixture = TestBed.createComponent(AddMediaComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
