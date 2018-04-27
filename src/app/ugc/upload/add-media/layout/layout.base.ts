import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { QueryParams, StaticUtils } from '../../../../ugc-shared/services/static-utils';
import { PROMPT_TYPE } from '../../../../ugc-shared/components/submission-prompt/submission-prompt.component';
import { MediaUploadService, MediaUpload } from
  '../../../../ugc-shared/services/media-upload/media-upload.service';
import { UgcErrorReportService } from '../../../../ugc-shared/services/ugc-error-report/ugc-error-report.service';

/**
 * A base class to abstract out common code used between the desktop and mobile layouts for the landing page
 */
export abstract class AddMediaLayoutBase {
  public submissionPromptType: PROMPT_TYPE;
  public uploadError: boolean = false;
  constructor(
    protected _changeDetector: ChangeDetectorRef,
    protected _mediaUpload: MediaUploadService,
    protected _router: Router,
    protected _UgcErrorReportService: UgcErrorReportService
  ) { }

  /**
   * Method to handle the cancel upload
   * This will reset the media array and redirects to landing page
   */
  public uploadCancelled() {
    this._mediaUpload.resetMediaItems();
    this._router.navigate(['/ugc/landing'], { queryParams: StaticUtils.queryParams });
  }
  /**
   * Method to inform when the prompt type has been changed
   * The prompt type corresponds to the submission prompt
   *
   * @param {PROMPT_TYPE} promptType
   */
  public promptTypeSet(promptType: PROMPT_TYPE): void {
    this.submissionPromptType = promptType;
    this._changeDetector.detectChanges();
  };
}
