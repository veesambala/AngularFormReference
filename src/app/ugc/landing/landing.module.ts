import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../ugc-shared/components/shared-components.module';
import { routes } from './landing.routes';
import { MobileLayoutComponent } from './layout/mobile-layout/mobile-layout.component';
import { UgcLandingComponent } from './landing.component';
import { DesktopLayoutComponent } from './layout/desktop-layout/desktop-layout.component';
import { PoweredByComponent } from './shared/powered-by/powered-by.component';
import { UploadComponent } from './shared/upload/upload.component';
import { HeaderBackgroundComponent } from './layout/mobile-layout/header-background/header-background.component';

@NgModule({
  declarations: [
    UgcLandingComponent,
    DesktopLayoutComponent,
    MobileLayoutComponent,
    HeaderBackgroundComponent,
    PoweredByComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class UgcLandingModule {}
