import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { SharedServicesModule } from './ugc-shared/services/shared-services.module';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './ugc-shared/components/shared-components.module';
import '../styles/styles.scss';
import { CoreServicesModule } from './core/services/core.services.module';
const APP_PROVIDERS = [];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedComponentsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    CoreServicesModule.forRoot(),
    SharedServicesModule.forRoot(),
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
