import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { UgcCustomizationService } from
    '../../../../../ugc-shared/services/ugc-customization/ugc-customization.service';

@Component({
    selector: 'next-button',
    templateUrl: './next-button.component.html',
    styleUrls: ['./next-button.component.scss', './next-button.component.theme.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextButtonComponent {
    @Output()
    public onUploadSelected: EventEmitter<any> = new EventEmitter();
    public nextBtnText: string;
    constructor(
        private _changeDetector: ChangeDetectorRef,
        private _customizationService: UgcCustomizationService
    ) {
        this.setText();
    }

    public handleNext(): void {
      this.onUploadSelected.emit();
    }
    public setText() {
        this.nextBtnText = this._customizationService.locales.current().nextText;
    }
}
