import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { UgcCustomizationService } from
    '../../../../../ugc-shared/services/ugc-customization/ugc-customization.service';

@Component({
    selector: 'add-media-prompt',
    templateUrl: './add-media-prompt.component.html',
    styleUrls: ['./add-media-prompt.component.scss', './add-media-prompt.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMediaPromptComponent {
    public addMediaPrompt: string;

    constructor(private _changeDetector: ChangeDetectorRef,
                private _customizationService: UgcCustomizationService) {
        this.setText();
    }
    public setText() {
        this.addMediaPrompt = this._customizationService.locales.current().addMediaPrompt;
    }
}