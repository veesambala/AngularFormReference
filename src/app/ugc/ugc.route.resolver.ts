import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart, RoutesRecognized } from '@angular/router';
import { UgcCustomizationService } from '../ugc-shared/services/ugc-customization/ugc-customization.service';

interface Ugc {
    title: string;
    isSplash: boolean;
}

@Injectable()
export class UgcRouteResolver implements Resolve<Ugc> {
    constructor(
        private ugcCutomizeService: UgcCustomizationService
      ) {}
     public resolve (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.ugcCutomizeService.ugcC11n;
    }
}
