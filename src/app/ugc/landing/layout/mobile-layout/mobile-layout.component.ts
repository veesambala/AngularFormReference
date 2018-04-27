import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LandingBaseClass } from '../layout.base';

@Component({
  selector: 'mobile-layout',
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.scss', './mobile-layout.component.theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Component for handling the display for the mobile layout.
 * Includes the gradient background and the grid pattern over the top of it.
 *
 * TODO: write unit tests
 */
export class MobileLayoutComponent extends LandingBaseClass {

  constructor(
    _changeDetector: ChangeDetectorRef,
    _router: Router
  ) {
    super(_router, _changeDetector);
  }
}
