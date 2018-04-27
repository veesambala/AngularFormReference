import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UgcCustomizationService } from '../../services/ugc-customization/ugc-customization.service';
import { BURST_LOGO, Logo } from '../../factories/customization.factory';

@Component({
  selector: 'ugc-branding-logos',
  templateUrl: './branding-logos.component.html',
  styleUrls: ['./branding-logos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Component for displaying logos on the landing page
 * Pulls the logos from the c11n file.
 * It references the landing configuration for the primary and sponsor logo types.
 * Secondary logo is only shown if the primary logo is not burst.
 * Forces the logo to appear circular
 *
 * The possible configurations are:
 *  - account logo - show only the logo image for the account if it is given
 *  - account logo, sponsor logo - show the logo image for the account as well as the ad sponsor logo along side it
 *  - burst logo - default fall back if the above are not given
 */
export class BrandingLogosComponent {
  /**
   * The Logo object to display as the bigger logo
   * If none given, will not display
   */
  public primaryLogo: Logo;

  /**
   * The Logo object to display as the smaller logo, when displaying will overlap with the primaryLogo slightly
   * If none give, will not display
   */
  public sponsorLogo: Logo;

  constructor(
    private _customizationService: UgcCustomizationService,
    private _changeDetector: ChangeDetectorRef
  ) {
    this.setLogos();
  }

  /**
   * Triggered by the primary logo image when it encounters an error loading the image
   * Fall back to the burst logo when the error occurs
   *
   * To prevent infinite recursion such as when no network connection is available,
   * only set if the primary is not currently the burst logo
   */
  public primaryLogoError(): void {
    if (this.primaryLogo && this.primaryLogo.imageUrl !== BURST_LOGO.imageUrl) {
      this.primaryLogo = BURST_LOGO;
      this._changeDetector.detectChanges();
    }
  }

  /**
   * Triggered by the sponsor logo image when it encounters an error loading the image
   * Fall back on not displaying the sponsor logo when the error occurs
   */
  public sponsorLogoError(): void {
    this.sponsorLogo = null;
    this._changeDetector.detectChanges();
  }

  private setLogos(): void {
    let primaryKey: string = this._customizationService.ugcC11n.branding.primaryLogo;
    let sponsorKey: string = this._customizationService.ugcC11n.branding.sponsorLogo;
    this.primaryLogo = this._customizationService.ugcC11n.branding.logos.getLogo(primaryKey);
    this.sponsorLogo = this._customizationService.ugcC11n.branding.logos.getLogo(sponsorKey);
  }
}
