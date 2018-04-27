import { BrandingLogosComponent } from './branding-logos.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Logo } from '../../factories/customization.factory';
import { UgcCustomizationService } from '../../services/ugc-customization/ugc-customization.service';

const BURST_LOGO: Logo = {
  imageUrl: 'https://burst.com/nbw/assets/images/burst.png',
  clickThroughUrl: 'https://burst.com'
};

const TEST_LOGO: Logo = {
  imageUrl: 'https://image.freepik.com/free-icon/macos-platform_318-33076.jpg',
  clickThroughUrl: 'http://www.apple.com'
};

const TEST_SEC_LOGO: Logo = {
  imageUrl: 'http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png',
  clickThroughUrl: 'http://www.google.com'
};

const TEST_UNCLICKABLE_LOGO: Logo = {
  imageUrl: 'http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png',
  clickThroughUrl: ''
};

describe('BrandingLogosComponent', () => {
  /*
  Test that the component works and can be created for all different settings
   */
  describe('creation', () => {
    it('should work with no logos', () => {
      let env: TestEnv = setup('NONE', 'NONE');
      expect(env.component).toBeDefined();
    });
  });

  /*
  Test that the components logo variables are set correctly based on the ugc c11n
   */
  describe('logo variables', () => {
    it('should be null when NONE provided', () => {
      let env: TestEnv = setup('NONE', 'NONE');
      expect(env.component.primaryLogo).toBeNull();
      expect(env.component.primaryLogo).toBeNull();
    });

    it('should be burst logo for primary and null for sponsor when BURST provided', () => {
      let env: TestEnv = setup('BURST', 'NONE');
      expect(env.component.primaryLogo).toBeDefined();
      expect(env.component.primaryLogo.imageUrl).toEqual(BURST_LOGO.imageUrl);
      expect(env.component.primaryLogo.clickThroughUrl).toEqual(BURST_LOGO.clickThroughUrl);
      expect(env.component.sponsorLogo).toBeNull();
    });

    it('should set sponsor as null if primary is BURST', () => {
      let env: TestEnv = setup('BURST', 'BURST');
      expect(env.component.sponsorLogo).toBeNull();
    });

    it('should be test logo for primary and test sec logo for sponsor when provided', () => {
      let env: TestEnv = setup('TEST', 'TEST_SEC');
      expect(env.component.primaryLogo).toBeDefined();
      expect(env.component.primaryLogo.imageUrl).toEqual(TEST_LOGO.imageUrl);
      expect(env.component.primaryLogo.clickThroughUrl).toEqual(TEST_LOGO.clickThroughUrl);
      expect(env.component.sponsorLogo).toBeDefined();
      expect(env.component.sponsorLogo.imageUrl).toEqual(TEST_SEC_LOGO.imageUrl);
      expect(env.component.sponsorLogo.clickThroughUrl).toEqual(TEST_SEC_LOGO.clickThroughUrl);
    });
  });

  /*
  Test that the layout for the logo variables happens correctly based on the ugc c11n
   */
  describe('logo dom', () => {
    it('should not have primary or sponsor logos or anchors when NONE provided', () => {
      let env: TestEnv = setup('NONE', 'NONE');
      expect(env.fixture.nativeElement.querySelector('a')).toBeUndefined();
      expect(env.fixture.nativeElement.querySelector('img')).toBeUndefined();
    });

    it('should have correct primary anchor and image for BURST', () => {
      let env: TestEnv = setup('BURST', 'NONE');
      let primaryAnchor: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.primary-logo');
      expect(primaryAnchor).toBeDefined();
      expect(primaryAnchor.href).toEqual(BURST_LOGO.clickThroughUrl);
      let primaryImage: HTMLImageElement = env.fixture.nativeElement.querySelector('.primary-logo-image');
      expect(primaryImage).toBeDefined();
      expect(primaryImage.src).toEqual(BURST_LOGO.imageUrl);
     });

    it('should not have sponsor for BURST', () => {
      let env: TestEnv = setup('BURST', 'BURST');
      let sponsorAnchor: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.sponsor-logo');
      expect(sponsorAnchor).toBeUndefined();
      let sponsorImage: HTMLImageElement = env.fixture.nativeElement.querySelector('.sponsor-logo-image');
      expect(sponsorImage).toBeUndefined();
    });

    it('should have correct primary and sponsor anchors and images for TEST', () => {
      let env: TestEnv = setup('TEST', 'TEST_SEC');
      let primaryAnchor: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.primary-logo');
      expect(primaryAnchor).toBeDefined();
      expect(primaryAnchor.href).toEqual(TEST_LOGO.clickThroughUrl);
      let primaryImage: HTMLImageElement = env.fixture.nativeElement.querySelector('.primary-logo-image');
      expect(primaryImage).toBeDefined();
      expect(primaryImage.src).toEqual(TEST_LOGO.imageUrl);

      let sponsorAnchor: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.sponsor-logo');
      expect(sponsorAnchor).toBeDefined();
      expect(sponsorAnchor.href).toEqual(TEST_SEC_LOGO.clickThroughUrl);
      let sponsorImage: HTMLImageElement = env.fixture.nativeElement.querySelector('.sponsor-logo-image');
      expect(sponsorImage).toBeDefined();
      expect(sponsorImage.src).toEqual(TEST_SEC_LOGO.imageUrl);
    });

    it('should not have clickable anchors for no click through', () => {
      let env: TestEnv = setup('TEST_UNCLICKABLE', 'TEST_UNCLICKABLE');
      let primaryAnchor: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.primary-logo');
      expect(primaryAnchor).toBeDefined();
      expect(primaryAnchor.classList.toString()).toContain('disabled');

      let sponsorAnchor: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.sponsor-logo');
      expect(sponsorAnchor).toBeDefined();
      expect(sponsorAnchor.classList.toString()).toContain('disabled');
    });
  });
});

/*
Mock parameters for testing
 */

function setup(primary: 'NONE'|'BURST'|string,
               sponsor: 'NONE'|'BURST'|string): TestEnv {
  let service = {
    ugcC11n: {
      landing: {
        primaryLogo: primary,
        sponsorLogo: sponsor
      },
      branding: {
        logos: {
          BURST: BURST_LOGO,
          TEST: TEST_LOGO,
          TEST_SEC: TEST_SEC_LOGO,
          TEST_UNCLICKABLE: TEST_UNCLICKABLE_LOGO,
          getLogo: (key: string) => {
            if (key in service.ugcC11n.branding.logos) {
              return service.ugcC11n.branding.logos[key];
            }

            return service.ugcC11n.branding.logos[key];
          }
        }
      }
    }
  };
  TestBed.configureTestingModule({
    declarations: [ BrandingLogosComponent ],
    providers: [
      { provide: UgcCustomizationService, useValue: service }
    ]
  });
  let fixture = TestBed.createComponent(BrandingLogosComponent);

  return {
    fixture: fixture,
    component: fixture.componentInstance,
    customizationService: TestBed.get(UgcCustomizationService)
  };
}

interface TestEnv {
  fixture: ComponentFixture<BrandingLogosComponent>;
  component: BrandingLogosComponent;
  customizationService: Partial<UgcCustomizationService>;
}
