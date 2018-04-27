import { UgcCustomizationService } from '../../../../ugc-shared/services/ugc-customization/ugc-customization.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopLayoutComponent } from './desktop-layout.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({ selector: 'ugc-desktop-right', template: '' })
class DesktopRightStubComponent { }

@Component({ selector: 'branding-logos', template: '' })
class BrandingLogosStubComponent { }

@Component({ selector: 'upload', template: '' })
class UploadStubComponent { }

@Component({ selector: 'powered-by', template: '' })
class PoweredByStubComponent { }

describe('DeskLayout Component', () => {
    it('Component creation', () => {
        let env = setup('');
        expect(env.component).toBeDefined();
    });
});

/*
Mock parameters for testing
 */
function setup(landingTitle: string): TestEnv {
    let router = {
    };
    let service = {
        locales: {
            current: () => {
                return service.locales.locale;
            },
            locale: {
                landingPageTitle: landingTitle

            },
        }
    };

    TestBed.configureTestingModule({
        declarations: [DesktopLayoutComponent, DesktopRightStubComponent,
            BrandingLogosStubComponent, PoweredByStubComponent,
            UploadStubComponent],
        providers: [
            { provide: Router, useValue: router },
            { provide: UgcCustomizationService, useValue: service }]


    });
    let fixture = TestBed.createComponent(DesktopLayoutComponent);

    return {
        fixture: fixture,
        component: fixture.componentInstance,
        _router: TestBed.get(Router),
        customizationService: TestBed.get(UgcCustomizationService)
    };
}

interface TestEnv {
    fixture: ComponentFixture<DesktopLayoutComponent>;
    component: DesktopLayoutComponent;
    _router: Partial<Router>;
    customizationService: Partial<UgcCustomizationService>;
}
