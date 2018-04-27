import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticUtils } from '../../../ugc-shared/services/static-utils';

@Component({
  selector: 'ugc-upload-terms-conditions',
  templateUrl: './upload-terms-conditions.component.html',
  styleUrls: ['./upload-terms-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadTermsConditionsComponent {

  constructor(private _changeDetector: ChangeDetectorRef,
              private _router: Router) {
  }

  private navigateBack() {
    this._router.navigate(['/ugc/upload/upload-confirm'],
                          { queryParams: StaticUtils.queryParams });
  }
  private onImageLoaded(event): void {
    this._changeDetector.detectChanges();
  }

  private onImageError(event): void {
    this._changeDetector.detectChanges();
  }
}