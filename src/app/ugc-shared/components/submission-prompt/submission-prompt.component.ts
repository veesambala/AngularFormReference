import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Logo } from '../../factories/customization.factory';
import { UgcCustomizationService } from '../../services/ugc-customization/ugc-customization.service';

@Component({
  selector: 'submission-prompt',
  templateUrl: './submission-prompt.component.html',
  styleUrls: ['./submission-prompt.component.scss', './submission-prompt.component.theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Component for displaying the media submission title and banner images.
 * Pulls the title as well as the submission prompt (if available) from the c11n locales.
 * References the defaultLandingPageTitle and the landingPageTitlePrompt
 * Pulls the submission images from the c11n.landing object.
 * References the submissionBannerImage and the submissionBannerLogo
 *
 * Can be configured to just show the title, if so then the promptType will be TEXT_ONLY
 * Can be configured to show the title and a banner image, if so then the promptType will be IMAGE
 *
 * OnInit an event will be fired for what the prompt type is decided as
 *
 * TODO: write unit tests
 */
export class SubmissionPromptComponent implements OnInit {
  @Output()
  public onPromptTypeSet: EventEmitter<PROMPT_TYPE> = new EventEmitter();

  public promptType: PROMPT_TYPE;
  public submissionTitle: string;
  public submissionBannerImage: string;
  public submissionBannerLogo: Logo;
  public submissionBannerText: string;

  constructor(
    private _customizationService: UgcCustomizationService
  ) {
    this.setType();
    this.setText();
    this.setImages();
  }

  public ngOnInit(): void {
    this.onPromptTypeSet.next(this.promptType);
  }

  private setType(): void {
    this.promptType = this._customizationService.ugcC11n.landing.submissionBannerImageUrl ? 'IMAGE' : 'TEXT_ONLY';
  }

  private setText(): void {
    this.submissionTitle = this._customizationService.locales.current().landingPageTitle;
    this.submissionBannerText = this._customizationService.locales.current().landingPageTitlePrompt;
  }

  private setImages(): void {
    if (this.promptType === 'TEXT_ONLY') {
      return;
    }

    this.submissionBannerImage = this._customizationService.ugcC11n.landing.submissionBannerImageUrl;
    let logoKey: string = this._customizationService.ugcC11n.landing.submissionBannerLogo;
    this.submissionBannerLogo = this._customizationService.ugcC11n.branding.logos.getLogo(logoKey);
  }
}

export type PROMPT_TYPE = 'TEXT_ONLY' | 'IMAGE';
