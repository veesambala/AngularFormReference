import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UgcErrorReportService } from '../../../../../ugc-shared/services/ugc-error-report/ugc-error-report.service';
import { AddMediaLayoutBase } from '../layout.base';
import { StaticUtils } from '../../../../../ugc-shared/services/static-utils';
import { MediaUploadService, MediaUpload } from
  '../../../../../ugc-shared/services/media-upload/media-upload.service';
import { UgcCustomizationService } from
  '../../../../../ugc-shared/services/ugc-customization/ugc-customization.service';

@Component({
  selector: 'add-media-desktop-layout',
  templateUrl: './add-media-desktop.component.html',
  styleUrls: ['./add-media-desktop.component.scss', './add-media-desktop.component.theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMediaDesktopLayoutComponent extends AddMediaLayoutBase {
  public mediaUpload: MediaUpload;
  public uploadError: boolean = false;
  public addMediaPrompt: string;
  public filesList = [];
  public showPreview: boolean = false;
  public mediaState: MEDIA_STATUS = 'NO_MEDIA_SELECTED';
  public mediaTitle: string = '';
  public pageProgress: number = 25;
  public cancelButtonText: string;
  public mediaTitleText: string;

  constructor(
    public _changeDetector: ChangeDetectorRef,
    public _mediaUpload: MediaUploadService,
    public _router: Router,
    public _UgcErrorReportService: UgcErrorReportService,
    private _customizationService: UgcCustomizationService
  ) {
    super(_changeDetector, _mediaUpload, _router, _UgcErrorReportService);
    this.setText();
    this.setMediaUploadService();
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

  public fileRemoved(fileIndex: number) {
    this.filesList.splice(fileIndex, 1);
    this.setMediaSelectionState();
  }

  private setText(): void {
    this.addMediaPrompt = this._customizationService.locales.current().addMediaPrompt;
    this.cancelButtonText = this._customizationService.locales.current().cancelText;
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
      this.pageProgress = 25;
      this.showPreview = false;
    } else if (this.filesList.length > 0 && this.filesList.length < 5) {
      this.mediaState = 'MEDIA_SELECTED';
      this.pageProgress = 50;
    } else if (this.filesList.length === 5) {
      this.mediaState = 'MAX_MEDIA_SELECTED';
      this.pageProgress = 50;
    }
  }

}
export type MEDIA_STATUS = 'NO_MEDIA_SELECTED' | 'MEDIA_SELECTED' | 'MAX_MEDIA_SELECTED';
