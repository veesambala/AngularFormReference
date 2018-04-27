import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { routes } from './gallery.routes';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        GalleryComponent,
    ],
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class GalleryModule {

}