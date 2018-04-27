import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { MediaUploadService } from './media-upload/media-upload.service';
import { FileService } from './media-upload/file/file.service';
import { FileChunkService } from './media-upload/file/file-chunk/file-chunk.service';
import { PageProgressService } from './page-progress/page-progress.service';
import { UgcCustomizationService } from './ugc-customization/ugc-customization.service';
import { UserInfoService } from './user-info/user-info.service';
import { PlatformHttpService } from './platform-http/platform-http.service';
import { Http } from '@angular/http';

import { UgcErrorReportService } from './ugc-error-report/ugc-error-report.service';

@NgModule({
    declarations: [
    ],
    providers: [
        MediaUploadService,
        FileService,
        FileChunkService,
        PageProgressService,
        UgcCustomizationService,
        UserInfoService,
        PlatformHttpService
    ],
    imports: [],

})
export class SharedServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedServicesModule,
            providers: [
                {
                    provide: UgcCustomizationService,
                    useClass: UgcCustomizationService,
                    deps: [
                        Http
                    ]
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: loadUgcCustomizationFactory,
                    deps: [
                        UgcCustomizationService
                    ],
                    multi: true
                },
                MediaUploadService,
                FileService,
                FileChunkService,
                PageProgressService,
                UserInfoService,
                PlatformHttpService,
                UgcErrorReportService
            ]
        };
    }

}

export function loadUgcCustomizationFactory(UgcCustomization: UgcCustomizationService) {
    return () => {
        return UgcCustomization.load();
    };
}
