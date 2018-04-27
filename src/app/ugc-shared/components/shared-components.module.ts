import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ListComponent } from './list/list.component';
import { LogoComponent } from './logo/logo.component';
import { PageProgressComponent } from './page-progress/page-progress.component';
import { UploadProgressComponent } from './upload-progress/upload-progress.component';
import { PreviewComponent } from './preview/preview.component';
import { ProgressComponent } from './Progress/progress.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { DesktopBackgroundComponent } from './desktop-background/desktop-background.component';
import { ScrolldownComponent } from './scroll-down-component/scrolldown.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DefaultConfig } from '../factories/default-loader-config.factory';
import { BrandingLogosComponent } from './branding-logos/branding-logos.component';
import { SubmissionPromptComponent } from './submission-prompt/submission-prompt.component';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    BrandingLogosComponent,
    SubmissionPromptComponent,
    CheckboxComponent,
    ListComponent,
    LogoComponent,
    PageProgressComponent,
    PreviewComponent,
    ProgressComponent,
    ThumbnailComponent,
    DesktopBackgroundComponent,
    ScrolldownComponent,
    UploadProgressComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot(DefaultConfig),
  ],
  exports: [
    BrandingLogosComponent,
    SubmissionPromptComponent,
    CheckboxComponent,
    ListComponent,
    LogoComponent,
    PageProgressComponent,
    PreviewComponent,
    ProgressComponent,
    ThumbnailComponent,
    DesktopBackgroundComponent,
    UploadProgressComponent
  ]
})
export class SharedComponentsModule {}
