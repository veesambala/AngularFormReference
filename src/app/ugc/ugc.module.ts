import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UgcComponent } from './ugc.component';
import { routes, LandingGuard } from './ugc.routes';
import { UgcRouteResolver } from './ugc.route.resolver';

@NgModule({
    declarations: [
        UgcComponent,
    ],
    entryComponents: [],
    providers: [UgcRouteResolver, LandingGuard],
    imports: [RouterModule.forChild(routes)]
})
export class UgcModule {}
