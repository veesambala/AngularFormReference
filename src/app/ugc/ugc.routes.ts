import { Routes, Router } from '@angular/router';
import { UgcRouteResolver } from './ugc.route.resolver';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UgcCustomizationService } from '../ugc-shared/services/ugc-customization/ugc-customization.service';

@Injectable()
export class LandingGuard implements CanActivate {
    isSplash: boolean;
    constructor(private _customization: UgcCustomizationService,
                private _router: Router) {
        this.isSplash = true;
    }
    canActivate(_activatedSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.isSplash) {
            this._router.navigateByUrl('/ugc/splash');
        }

        if (this._customization.ugcC11n == null) {
            console.log('UGC Customization Json not loaded!');
            return false;
        }else {
            return true;
        }
    }
}

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { path: 'gallery', loadChildren: './gallery#GalleryModule' },
            { path: 'tellus', loadChildren: './tell-us#TellUsModule' },
            { path: 'splash', loadChildren: './splash#SplashModule' },
            { path: 'landing', loadChildren: './landing#UgcLandingModule', canActivate: [LandingGuard] },
            { path: 'upload', loadChildren: './upload#UploadModule' }
        ],
        resolve: {
            ugcCustomization: UgcRouteResolver
        }

    }
];
