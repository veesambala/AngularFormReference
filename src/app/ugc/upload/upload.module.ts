import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { routes } from './upload.routes';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../ugc-shared/components/shared-components.module';
import { SharedServicesModule } from '../../ugc-shared/services/shared-services.module';
import { UploadConfirmComponent } from './upload-confirm/upload-confirm.component';
import { UploadInProgressComponent } from './upload-in-progress-container/upload-in-progress/upload-in-progress.component';
import { UploadInProgressMobileComponent } from './upload-in-progress-container/upload-in-progress-mobile/upload-in-progress-mobile.component';
import { UploadSuccessComponent } from './upload-success-container/upload-success/upload-success.component';
import { UploadSuccessMobileComponent } from './upload-success-container/upload-success-mobile/upload-success-mobile.component';
import { UploadTermsConditionsComponent } from './upload-terms-conditions/upload-terms-conditions.component';
import { UploadTermsConditionsMobileComponent } from './upload-terms-conditions-mobile/upload-terms-conditions-mobile.component';
import { UploadInProgressContainerComponent } from './upload-in-progress-container/upload-in-progress-container.component';
import { UploadSuccessContainerComponent } from './upload-success-container/upload-success-container.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { AddMediaDesktopLayoutComponent } from './add-media/layout/desktop-layout/add-media-desktop.component';
import { AddMediaMobileLayoutComponent } from './add-media/layout/mobile-layout/add-media-mobile.component';
import { AddMediaHeaderComponent } from './add-media/shared/header/add-media-header.component';
import { MediaAdderComponent } from './add-media/shared/media-adder/media-adder.component';
import { NextButtonComponent } from './add-media/shared/next-button/next-button.component';
import { NavigationLinkComponent } from './add-media/shared/navigation/navigation-link.component';
import { AddMediaPromptComponent } from './add-media/shared/add-media-prompt/add-media-prompt.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserInfoDesktopLayoutComponent } from './user-info/layout/desktop-layout/user-info-desktop.component';
import { UserInfoMobileLayoutComponent } from './user-info/layout/mobile-layout/user-info-mobile.component';

@NgModule({
    declarations: [
        UploadComponent,
        AddMediaComponent,
        AddMediaDesktopLayoutComponent,
        AddMediaMobileLayoutComponent,
        UploadConfirmComponent,
        UploadInProgressComponent,
        UploadInProgressMobileComponent,
        UploadSuccessComponent,
        UploadSuccessMobileComponent,
        UploadTermsConditionsComponent,
        UploadTermsConditionsMobileComponent,
        UploadInProgressContainerComponent,
        UploadSuccessContainerComponent,
        AddMediaHeaderComponent,
        MediaAdderComponent,
        NextButtonComponent,
        NavigationLinkComponent,
        AddMediaPromptComponent,
        UserInfoComponent,
        UserInfoDesktopLayoutComponent,
        UserInfoMobileLayoutComponent
    ],
    imports: [SharedComponentsModule, FormsModule, CommonModule, RouterModule.forChild(routes)],
    exports: []
})
export class UploadModule {}
