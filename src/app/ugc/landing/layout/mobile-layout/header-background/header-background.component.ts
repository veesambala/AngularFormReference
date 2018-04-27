import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header-background',
  templateUrl: './header-background.component.html',
  styleUrls: ['./header-background.component.scss', './header-background.component.theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Component for displaying and theming the background for the mobile header.
 * Includes the gradient background and the grid pattern over the top of it.
 *
 * TODO: write unit tests
 */
export class HeaderBackgroundComponent {}
