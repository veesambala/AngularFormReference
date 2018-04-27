import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';
import { ModuleWithProviders } from '@angular/core';
import { AddMediaComponent } from './add-media/add-media.component';
import { UserInfoComponent } from './user-info/user-info.component'
import { UploadConfirmComponent } from './upload-confirm/upload-confirm.component';
import { UploadTermsConditionsComponent } from './upload-terms-conditions/upload-terms-conditions.component';
import { UploadInProgressContainerComponent } from
'./upload-in-progress-container/upload-in-progress-container.component';
import { UploadSuccessContainerComponent } from './upload-success-container/upload-success-container.component';
export const routes = [{
  path: '',
  component: UploadComponent,
  children: [
      { path: '', redirectTo: 'add-media' },
      { path: 'add-media', component: AddMediaComponent },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'upload-confirm', component: UploadConfirmComponent },
      { path: 'terms-conditions', component: UploadTermsConditionsComponent },
      { path : 'upload-inprogress', component: UploadInProgressContainerComponent },
      { path: 'upload-success', component: UploadSuccessContainerComponent }
  ]
}]
