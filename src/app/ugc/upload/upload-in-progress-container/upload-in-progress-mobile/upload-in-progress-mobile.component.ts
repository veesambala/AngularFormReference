import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MediaUploadService, MediaUpload } from
  '../../../../ugc-shared/services/media-upload/media-upload.service';
@Component({
  selector: 'ugc-in-progress-mobile',
  templateUrl: './upload-in-progress-mobile.component.html',
  styleUrls: ['./upload-in-progress-mobile.component.scss']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadInProgressMobileComponent {
  public filesList = [];

  constructor(private _changeDetector: ChangeDetectorRef,
              private _mediaUpload: MediaUploadService) {
    if (this._mediaUpload.mediaUpload.mediaItems.length > 0) {
      this.filesList = this._mediaUpload.mediaUpload.mediaItems;
    }
  }
  public fileRemoved(fileIndex: number) {
    this.filesList.splice(fileIndex, 1);
  }

  private onImageLoaded(event): void {
    this._changeDetector.detectChanges();
  }

  private onImageError(event): void {
    this._changeDetector.detectChanges();
  }
}
