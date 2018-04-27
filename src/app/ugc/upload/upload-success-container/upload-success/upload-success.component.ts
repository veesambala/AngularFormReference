import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticUtils } from '../../../../ugc-shared/services/static-utils';

@Component({
  selector: 'ugc-upload-success',
  templateUrl: './upload-success.component.html',
  styleUrls: ['./upload-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadSuccessComponent {

  constructor(private _changeDetector: ChangeDetectorRef,
              private _router: Router) {

  }
  public addMedia() {
    this._router.navigate(['/ugc/upload/add-media'], { queryParams: StaticUtils.queryParams });
  }
  public onImageLoaded(event): void {
    this._changeDetector.detectChanges();
  }

  public onImageError(event): void {
    this._changeDetector.detectChanges();
  }
}