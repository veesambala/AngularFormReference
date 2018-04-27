import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
@Component({
  selector: 'ugc-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
    constructor(private _changeDetector: ChangeDetectorRef){

    }
}