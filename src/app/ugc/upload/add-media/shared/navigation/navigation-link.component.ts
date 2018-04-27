import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { UgcCustomizationService } from
    '../../../../../ugc-shared/services/ugc-customization/ugc-customization.service';

@Component({
    selector: 'navigation-link',
    templateUrl: './navigation-link.component.html',
    styleUrls: ['./navigation-link.component.scss', './navigation-link.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLinkComponent {
    @Output()
    public onBackButtonClicked: EventEmitter<any> = new EventEmitter();
    @Output()
    public onCancelButtonClicked: EventEmitter<any> = new EventEmitter();
    public backButtonText: string;
    public cancelButtonText: string;
    constructor(
        private _changeDetector: ChangeDetectorRef,
        private _customizationService: UgcCustomizationService
    ) {
        this.setText();
     }

    public handleBackBtn(): void {
        this.onBackButtonClicked.emit();
    }
    public handleCancelBtn(): void {
        this.onCancelButtonClicked.emit();
    }
    public setText() {
        this.backButtonText = this._customizationService.locales.current().backText;
        this.cancelButtonText = this._customizationService.locales.current().cancelText;
    }
}
