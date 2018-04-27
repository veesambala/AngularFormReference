import { Component } from '@angular/core';
import { UgcCustomizationService } from '../../services/ugc-customization/ugc-customization.service';

@Component({
  selector: 'ugc-desktop-right',
  templateUrl: './desktop-background.component.html',
  styleUrls: ['./desktop-background.component.scss', './desktop-background.component.theme.scss']
})
/**
 * Component for displaying the arc background on the right for all desktop screens
 * Primary and foreground colors are pulled form theming for the total background and the arc
 * Icons are configurable to be shown or not from the c11n file under theme.enableDesktopIconBackgrounds
 */
export class DesktopBackgroundComponent {
  public showIcons: boolean;

  constructor(
    private _customizationService: UgcCustomizationService
  ) {
    this.setCustomization();
  }

  private setCustomization(): void {
    this.showIcons = this._customizationService.ugcC11n.theme.enableDesktopIconBackgrounds;
  }
}
