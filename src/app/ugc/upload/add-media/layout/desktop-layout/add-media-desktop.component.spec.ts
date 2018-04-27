import { UgcCustomizationService } from '../../../../ugc-shared/services/ugc-customization/ugc-customization.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadAddMediaComponent } from './upload-add-media.component'
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { MediaUploadService, MediaUpload } from
  '../../../../ugc-shared/services/media-upload/media-upload.service';
import { UgcErrorReportService } from '../../../../ugc-shared/services/ugc-error-report/ugc-error-report.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({ selector: 'ugc-desktop-right', template: '' })
class DesktopRightStubComponent { }

@Component({ selector: 'submission-prompt', template: '' })
class SubmissionPromptStubComponent { }

@Component({ selector: 'ugc-page-progress', template: '' })
class UgCPageProgressStub {
  @Input('progressPercent') public progressPercent: number
}

describe(' UploadAddMediaComponent  ', () => {
  it('should create of UploadAddMediaComponent', () => {
    let env: TestEnv = setup(true);
    expect(env.component).toBeDefined();
  });
  fit('should call resetMediaItems() of MediaUploadService', () => {
    let env: TestEnv = setup(true);
    expect(env.component._mediaUpload.mediaUpload.isActive).toBe(true);
    expect(env.component._mediaUpload.mediaUpload).toBeDefined();
    spyOn(env.mediaUploadService, 'resetMediaItems').and.callFake(() => {
      return true;
    });
    expect(env.mediaUploadService.resetMediaItems).toBe(true);
  });
  it('shouldnot  call resetMediaItems() of MediaUploadService', () => {
    let env: TestEnv = setup(false);
    let resetMedia: boolean = false;
    expect(env.component._mediaUpload.mediaUpload.isActive).toBe(false);
    expect(env.component._mediaUpload.mediaUpload).toBeDefined();
    spyOn(env.mediaUploadService, 'resetMediaItems').and.callFake(() => {
      return true;
    });
    expect(env.mediaUploadService.resetMediaItems).toBeFalsy();
  });

});

function setup(reset: boolean): TestEnv {
  let mediaUpload = {
    mediaUpload: {
      isActive: reset,
      mediaItems: []
    },
    resetMediaItems: () => {
      let resetMedia = true;
    },
    createMediaUpload: () => {
      return;
    },
    fileUploadValidator: (file: any) => {
      return true;
    },
    addMedia: (file: any) => {
      return;
    }

  };
  let errorReport = {
    captureFileLogs: () => {
      return;
    },
  };
  let router = {};

  TestBed.configureTestingModule({
    declarations: [UploadAddMediaComponent, DesktopRightStubComponent,
      SubmissionPromptStubComponent, UgCPageProgressStub],
    providers: [
      { provide: MediaUploadService, useValue: mediaUpload },
      { provide: UgcErrorReportService, useValue: errorReport },
      { provide: Router, useValue: router },

    ]
  });
  let fixture = TestBed.createComponent(UploadAddMediaComponent);

  return {
    fixture: fixture,
    component: fixture.componentInstance,
    mediaUploadService: TestBed.get(MediaUploadService),
    ugcErrorReportService: TestBed.get(UgcErrorReportService),
    router: TestBed.get(Router),

  };
}

interface TestEnv {
  fixture: ComponentFixture<UploadAddMediaComponent>;
  component: UploadAddMediaComponent;
  mediaUploadService: Partial<MediaUploadService>;
  ugcErrorReportService: Partial<UgcErrorReportService>;
  router: Partial<Router>;
}
