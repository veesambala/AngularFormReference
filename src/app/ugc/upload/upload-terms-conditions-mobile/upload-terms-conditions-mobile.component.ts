import { ChangeDetectionStrategy,ChangeDetectorRef,Component } from '@angular/core';
@Component({
  selector: 'ugc-upload-terms-conditions-mobile',
  templateUrl: './upload-terms-conditions-mobile.component.html',
  styleUrls: ['./upload-terms-conditions-mobile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadTermsConditionsMobileComponent {

  constructor(private _changeDetector: ChangeDetectorRef){
          
  }
  onImageLoaded(event): void {
    this._changeDetector.detectChanges();
  }

  onImageError(event): void {
    this._changeDetector.detectChanges();
  }
}