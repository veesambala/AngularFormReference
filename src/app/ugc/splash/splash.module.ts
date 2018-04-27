import { NgModule } from '@angular/core';
import { SplashComponent } from './splash.component';
import { routes } from './splash.routes';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        SplashComponent
    ],
    imports: [
        RouterModule.forChild(routes)],
    exports: []
})
export class SplashModule {

}
