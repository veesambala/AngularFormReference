import { Component, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { Router } from '@angular/router';
import { MediaUploadService, MediaUpload } from
  '../../../../../ugc-shared/services/media-upload/media-upload.service';
import { StaticUtils } from '../../../../../ugc-shared/services/static-utils';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoLayoutBase } from '../layout.base'



@Component({
  selector: 'user-info-desktop-layout',
  templateUrl: './user-info-desktop.component.html',
  styleUrls: ['./user-info-desktop.component.scss','./user-info-desktop.component.theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})


export class UserInfoDesktopLayoutComponent {
  public ugcLogo: string;
  public ugcUserInfo: UserInfo = {
    name: '',
    email: '',
    title: '',
    firstName: '',
    lastName: ''
  };
  public invalidName: boolean = false;
  public invalidEmail: boolean = false;
  public invalidEmailPattern: boolean = false;
  public title = '';

  public email: string = '';

  constructor(private _changeDetector: ChangeDetectorRef,
              private _mediaUpload: MediaUploadService,
              private _router: Router,
  ) {
    this.ugcLogo = 'assets/img/ico-upload-logo.png';
    if (localStorage.getItem('mediatitle') !== undefined) {
      this.ugcUserInfo['title'] = localStorage.getItem('mediatitle');
    }
  }

  public handleNext() {

    if (this.ugcUserInfo['email'] && this.ugcUserInfo['name']) {
      console.log(this.ugcUserInfo['email']);
      this.ugcUserInfo['firstName'] = this.ugcUserInfo['name'].substr(0, this.ugcUserInfo['name'].indexOf(' '));
      this.ugcUserInfo['lastName'] = this.ugcUserInfo['name'].substr(this.ugcUserInfo['name'].indexOf(' ') + 1);

      this._mediaUpload.updateUserInfo(this.ugcUserInfo['email'],
        this.ugcUserInfo['firstName'],
        this.ugcUserInfo['lastName']);
      this._mediaUpload.updateMediaTitle(this.ugcUserInfo['title']);
      this._router.navigate(
        ['/ugc/upload/upload-confirm'],
        { queryParams: StaticUtils.queryParams });
    }
  }

  public handleCancelBackOperation(isNavigateToLanding) {
    this.ugcUserInfo = { name: '', email: '', title: '', firstName: '', lastName: '' };
    if (isNavigateToLanding) {
      this._router.navigate(
        ['/ugc/landing'],
        { queryParams: StaticUtils.queryParams });
    } else {
      this._router.navigate(
        ['/ugc/upload/media-preview'],
        { queryParams: StaticUtils.queryParams });
    }

  }
  public handlerFunction() {
    this.ugcUserInfo['email'] = '';
  }

  public onImageLoaded(event): void {
    this._changeDetector.detectChanges();
  }

  public onImageError(event): void {
    this._changeDetector.detectChanges();
  }
}

export interface UserInfo {
  name: string;
  email: string;
  title: string;
  firstName: string;
  lastName: string;
}