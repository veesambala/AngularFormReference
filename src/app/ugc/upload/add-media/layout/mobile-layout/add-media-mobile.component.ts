import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaUploadService, MediaUpload } from
  '../../../../../ugc-shared/services/media-upload/media-upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UgcErrorReportService } from '../../../../../ugc-shared/services/ugc-error-report/ugc-error-report.service';
import { AddMediaLayoutBase } from '../layout.base';
import { UgcCustomizationService } from
  '../../../../../ugc-shared/services/ugc-customization/ugc-customization.service';
import { MEDIA_STATUS } from '../desktop-layout/add-media-desktop.component';
import { StaticUtils } from '../../../../../ugc-shared/services/static-utils';

@Component({
  selector: 'add-media-mobile-layout',
  templateUrl: './add-media-mobile.component.html',
  styleUrls: ['./add-media-mobile.component.scss', 'add-media-mobile.component.theme.scss']
})
export class AddMediaMobileLayoutComponent extends AddMediaLayoutBase {
  public ugcAddLogoUrlSmall: string;
  public ugcAddLogoUrlBig: string;
  public mediaUpload: MediaUpload;
  public fileError: boolean = false;
  public addMediaPrompt: string;
  public filesList = [];
  public showPreview: boolean = false;
  public mediaState: MEDIA_STATUS = 'NO_MEDIA_SELECTED';
  public pageProgress: number = 33;
  public mediaTitleText: string;
  public mediaTitle: string = '';

  constructor(
    public _changeDetector: ChangeDetectorRef,
    public _mediaUpload: MediaUploadService,
    public _router: Router,
    public _UgcErrorReportService: UgcErrorReportService,
    private _customizationService: UgcCustomizationService
  ) {

    super(_changeDetector, _mediaUpload, _router, _UgcErrorReportService);
    this.setMediaUploadService();
    this.setText();
  }

  /**
   * Method to validate the selected file type, only allows 4 images and 1 video
   * Calls fileUploadValidator function to validate count
   * Sets the selected media to mediaUpload service if valid and navigates to media preview.
   */

  public fileSelected(eve: UIEvent) {
    let file: any = eve.target;
    if (this._mediaUpload.fileUploadValidator(file.files)) {
      this._mediaUpload.addMedia(file.files);
      this._UgcErrorReportService.captureFileLogs();
      this.getSelectedFiles();
      this.uploadError = false;
    } else {
      this.uploadError = true;
    }
  }

  public handleNext() {
    if (this.mediaTitle !== '') {
      this._mediaUpload.updateMediaTitle(this.mediaTitle);
      localStorage.setItem('mediatitle', this.mediaTitle);
      this._router.navigate(['/ugc/upload/user-info'], { queryParams: StaticUtils.queryParams });
    }
  };

  private getSelectedFiles(): void {
    if (this._mediaUpload && this._mediaUpload.mediaUpload && this._mediaUpload.mediaUpload.mediaItems.length > 0) {
      this.filesList = this._mediaUpload.mediaUpload.mediaItems;
      this.showPreview = true;
    }
    this.setMediaSelectionState();
    this._changeDetector.detectChanges();
  }
  private setMediaSelectionState(): void {
    if (this.filesList && this.filesList.length === 0) {
      this.mediaState = 'NO_MEDIA_SELECTED';
      this.pageProgress = 33;
      this.showPreview = false;
    } else if (this.filesList.length > 0 && this.filesList.length < 5) {
      this.mediaState = 'MEDIA_SELECTED';
      this.pageProgress = 66;
    } else if (this.filesList.length === 5) {
      this.mediaState = 'MAX_MEDIA_SELECTED';
      this.pageProgress = 66;
    }
    console.log("show", this.showPreview);
  }

  private setText(): void {
    this.addMediaPrompt = this._customizationService.locales.current().addMediaPrompt;
    this.mediaTitleText = this._customizationService.locales.current().mediaTitleText;
  }
  private setMediaUploadService(): void {
    if (this._mediaUpload.mediaUpload && this._mediaUpload.mediaUpload.isActive) {
      this._mediaUpload.resetMediaItems();
    } else {
      this._mediaUpload.createMediaUpload();
      this.mediaUpload = this._mediaUpload.mediaUpload;
    }
  }

}
