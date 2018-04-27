import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaUploadService, MediaUpload } from
  '../../../../../ugc-shared/services/media-upload/media-upload.service';
import { StaticUtils } from '../../../../../ugc-shared/services/static-utils';
import { UserInfoLayoutBase } from '../layout.base';

@Component({
  selector: 'user-info-mobile-layout',
  templateUrl: './user-info-mobile.component.html',
  styleUrls: ['./user-info-mobile.component.scss','./user-info-mobile.component.theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoMobileLayoutComponent  implements OnInit{
  public ugcLogo: string;
  public ugcUserInfo = {};
  public tcConfirmation = false;
  public tcNotSelected = false;

  constructor(private _changeDetector: ChangeDetectorRef,
              private _mediaUpload: MediaUploadService,
              private _router: Router) {
  }

  public ngOnInit() {
    this.ugcLogo = 'assets/img/ico-upload-logo.png';
  }
  public handleNext() {
    if (this.ugcUserInfo['email'] && this.ugcUserInfo['name']) {
      this._mediaUpload.updateUserInfo(this.ugcUserInfo['email'],
        this.ugcUserInfo['name'],
        this.ugcUserInfo['name']);

      this._mediaUpload.updateMediaTitle(this.ugcUserInfo['title']);
      if (this.tcConfirmation) {
        this._mediaUpload.startUpload();
        this._router.navigate(['/ugc/upload/upload-inprogress'],
        { queryParams: StaticUtils.queryParams });
      }else {
        this.tcNotSelected = true;
      }
    }
  }

  public tcSelection() {
    this.tcNotSelected = this.tcConfirmation ? false : true;
  }

  public onImageLoaded(event): void {
    this._changeDetector.detectChanges();
  }

}