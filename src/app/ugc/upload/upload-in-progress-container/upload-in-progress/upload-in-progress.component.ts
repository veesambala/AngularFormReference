import { Component } from '@angular/core';
import { MediaUploadService, MediaUpload } from
  '../../../../ugc-shared/services/media-upload/media-upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticUtils } from '../../../../ugc-shared/services/static-utils';

@Component({
  selector: 'ugc-upload-in-progress',
  templateUrl: './upload-in-progress.component.html',
  styleUrls: ['./upload-in-progress.component.scss']
})
export class UploadInProgressComponent {
  public filesList = [];
  public ugcLogoUrl = '';
  constructor(
    private _mediaUpload: MediaUploadService,
    private _router: Router) {
    this.ugcLogoUrl = 'assets/img/ico-ugc-logo.png';
    if (this._mediaUpload.mediaUpload.mediaItems.length > 0) {
      this.filesList = this._mediaUpload.mediaUpload.mediaItems;
    }
  }

  public fileRemoved(fileIndex: number) {
    this.filesList.splice(fileIndex, 1);
  }
  public closeUgc() {
    this._mediaUpload.mediaUpload.mediaItems = [];
    this._router.navigate(
     ['/ugc/landing'],
     { queryParams: StaticUtils.queryParams });
  }
}
