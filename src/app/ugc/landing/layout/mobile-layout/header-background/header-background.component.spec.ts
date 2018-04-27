import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderBackgroundComponent } from './header-background.component';

describe('HeaderBackgroundComponent', () => {
  fit('Component creation', () => {
    let env = setup();
    expect(env.component).toBeDefined();
  });
});

function setup(): TestEnv {
  TestBed.configureTestingModule({
    declarations: [HeaderBackgroundComponent],
    providers: []
  });
  let fixture = TestBed.createComponent(HeaderBackgroundComponent);
  return {
    fixture: fixture,
    component: fixture.componentInstance
  };
}

interface TestEnv {
  fixture: ComponentFixture<HeaderBackgroundComponent>;
  component: HeaderBackgroundComponent;
}
