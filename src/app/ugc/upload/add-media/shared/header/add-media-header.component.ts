import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BURST_LOGO, Logo } from '../../../../../ugc-shared/factories/customization.factory';
import { MediaUploadService } from '../../../../../ugc-shared/services/media-upload/media-upload.service';
import { UgcCustomizationService } from
    '../../../../../ugc-shared/services/ugc-customization/ugc-customization.service';

@Component({
    selector: 'add-media-header',
    templateUrl: './add-media-header.component.html',
    styleUrls: ['./add-media-header.component.scss', './add-media-header.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMediaHeaderComponent {
    public mediaTitle: string;
    public primaryLogo: Logo;

    constructor(private _changeDetector: ChangeDetectorRef,
                private _router: Router,
                private _customizationService: UgcCustomizationService) {
        this.setText();
        this.setLogo();
    }
    public setText() {
        this.mediaTitle = this._customizationService.locales.current().addMediaPageTitle;
    }
    public setLogo() {
        let logoKey: string = this._customizationService.ugcC11n.branding.primaryLogo;
        this.primaryLogo = this._customizationService.ugcC11n.branding.logos.getLogo(logoKey);
    }
}