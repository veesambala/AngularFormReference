import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MediaFileObserverData, MediaFile } from '../../services/media-upload/file/file.service';
import { MediaUploadService } from '../../services/media-upload/media-upload.service';


@Component({
  selector: 'ugc-page-progress',
  templateUrl: './page-progress.component.html',
  styleUrls: ['./page-progress.component.css']
})
export class PageProgressComponent implements OnInit {
  @Input('progressPercent') public progressPercent: number;
  constructor(public domSanitizer: DomSanitizer) {
  }
  public ngOnInit() {
  }
  public setMyProgressWidth() {
    let styles = {
      'width': this.progressPercent ? this.progressPercent + '%' : '100%'
    };
    return styles;
  }
}
