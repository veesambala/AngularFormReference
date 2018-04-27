import { NgModule } from '@angular/core';
import { TellUsComponent } from './tell-us.component';
import { routes } from './tell-us.routes';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        TellUsComponent
    ],
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class TellUsModule {

}
