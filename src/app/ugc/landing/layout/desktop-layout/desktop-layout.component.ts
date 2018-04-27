import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LandingBaseClass } from '../layout.base';
@Component({
  selector: 'desktop-layout',
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Component for handling the display for the desktop layout.
 * Includes the gradient background and the grid pattern over the top of it.
 *
 * TODO: style the layout completely so that everything shows up correctly for different resolutions
 * TODO: write unit tests
 */

export class DesktopLayoutComponent extends LandingBaseClass {
  constructor(public _router: Router,
              _changeDetector: ChangeDetectorRef) {
      super(_router, _changeDetector);
  }

}
