import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileLayoutComponent } from './mobile-layout.component';
import { SubmissionPromptComponent } from '../../shared/submission-prompt/submission-prompt.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({ selector: 'submission-prompt', template: '' })
class SubmissionStubComponent { }

@Component({ selector: 'header-background', template: '' })
class HeaderBackgroundStubComponent { }

@Component({ selector: 'branding-logos', template: '' })
class BrandingLogosStubComponent { }

@Component({ selector: 'upload', template: '' })
class UploadStubComponent { }

@Component({ selector: 'powered-by', template: '' })
class PoweredByStubComponent { }

describe('Mobile layout Component creation', () => {
    it('component creation', () => {
        let env = setup();
        expect(env.component).toBeDefined();
    });
    it('should have mobile-layout defined', () => {
        let env: TestEnv = setup();
        let mobileLayout: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.mobile-layout');
        expect(mobileLayout).toBeDefined();
        let mobileLayoutBody: HTMLAnchorElement = env.fixture.nativeElement.querySelector('.mobile-layout-body');
        expect(mobileLayoutBody).toBeDefined();
      });
});

/*
Mock parameters for testing
 */

function setup(): TestEnv {
    let router = {
    };

    TestBed.configureTestingModule({
        declarations: [MobileLayoutComponent, HeaderBackgroundStubComponent,
            SubmissionStubComponent, BrandingLogosStubComponent, PoweredByStubComponent,
            UploadStubComponent],
        providers: [
            { provide: Router, useValue: router }]
    });
    let fixture = TestBed.createComponent(MobileLayoutComponent);

    return {
        fixture: fixture,
        component: fixture.componentInstance,
        _router: TestBed.get(Router),

    };
}
interface TestEnv {
    fixture: ComponentFixture<MobileLayoutComponent>;
    component: MobileLayoutComponent;
    _router: Partial<Router>;

}