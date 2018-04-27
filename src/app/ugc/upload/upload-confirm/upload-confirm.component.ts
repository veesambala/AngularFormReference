import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MediaUploadService, MediaUpload } from
  '../../../ugc-shared/services/media-upload/media-upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticUtils } from '../../../ugc-shared/services/static-utils';

@Component({
  selector: 'ugc-upload-confirm',
  templateUrl: './upload-confirm.component.html',
  styleUrls: ['./upload-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadConfirmComponent {
  public ugcLogo: string;
  public ageConfirmation = false;
  public tcConfirmation = false;


  constructor(private _changeDetector: ChangeDetectorRef,
              private _mediaUpload: MediaUploadService,
              private _router: Router) {
    this.ugcLogo = 'assets/img/ico-upload-logo.png';
  }

  public uploadMedia() {
    console.log(this.ageConfirmation);
    if (this.ageConfirmation && this.tcConfirmation) {
      this._mediaUpload.startUpload();
      this._router.navigate(['/ugc/upload/upload-inprogress'],
      { queryParams: StaticUtils.queryParams });
    }
  }

  public navigateTcPage() {
    this._router.navigate(['/ugc/upload/terms-conditions'],
                          { queryParams: StaticUtils.queryParams });
  }
  public onImageLoaded(event): void {
    this._changeDetector.detectChanges();
  }

  public onImageError(event): void {
    this._changeDetector.detectChanges();
  }
  public navigate() {
    this._router.navigate(['/ugc/upload/user-info'],
    { queryParams: StaticUtils.queryParams });
  }
  public cancelled() {
    this._router.navigate(['/ugc/landing'],
    { queryParams: StaticUtils.queryParams });
  }
}