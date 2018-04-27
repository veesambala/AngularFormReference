import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { QueryParams, StaticUtils } from '../../../ugc-shared/services/static-utils';
import { PROMPT_TYPE } from '../shared/submission-prompt/submission-prompt.component';

/**
 * A base class to abstract out common code used between the desktop and mobile layouts for the landing page
 */
export abstract class LandingBaseClass {
  public submissionPromptType: PROMPT_TYPE;
  constructor(
    protected router: Router,
    protected _changeDetector: ChangeDetectorRef
  ) { }

  /**
   * Method to inform that the upload button has been clicked
   * On click, will route to the ugc/upload screens
   */
  public uploadClicked() {
    let queryParams: QueryParams = StaticUtils.queryParams;
    this.router.navigate(['/ugc/upload'], { queryParams: queryParams });
  }

  /**
   * Method to inform that the not now button has been clicked
   * On click, will route to the provided url
   *
   * @param {string} url the external resource location to route the window to
   */
  public notNowClicked(url: string) {
    window.location.href = url;
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
  }
}
