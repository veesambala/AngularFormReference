import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'ugc', pathMatch: 'full' },
  { path: 'ugc', loadChildren: './ugc#UgcModule' }
];
