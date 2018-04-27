import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MediaFileObserverData, MediaFile } from '../../services/media-upload/file/file.service';
import { MediaUploadService } from '../../services/media-upload/media-upload.service';
import { Router } from '@angular/router';
import { StaticUtils } from '../../services/static-utils';

@Component({
  selector: 'ugc-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.scss']
})
export class UploadProgressComponent implements OnInit {
  @Input('mediaFileObject') public mediaFileObject: MediaFile;
  @Input('fileIndex') public fileIndex: number;
  @Input('mobilePreview') public mobilePreview: boolean;
  @Output() public evEmitterForRemovingFiles = new EventEmitter<any>();

  public fileTypeResult: string = '';
  public isImage: boolean;
  private totalProgress: number = 0;
  private progress: number;
  private progressSubs = [];
  private previewUrl: SafeResourceUrl = '';
  private isUploadError: boolean = false;
  private showClose: boolean = false;


  constructor(public domSanitizer: DomSanitizer,
              private _mediaUpload: MediaUploadService,
              private _router: Router) {
  }

  public ngOnInit() {
    this.renderPreview();
    if (this.mobilePreview) {
      this.showClose = true;
    }
    var mediaItems = this._mediaUpload.mediaUpload.mediaItems.length;
    this.progressSubs.push(this.mediaFileObject.progressObserver.subscribe(
      (fileitem: MediaFileObserverData) => {
        this.isUploadError = fileitem.isError ? fileitem.isError : false;
        this.fileTypeResult = fileitem.observerType;
        this.totalProgress = fileitem.progressInBytes;
        setTimeout(() => {
          this.progress = fileitem.progressInPercent;
        }, 0);
      }
    ));
    this._mediaUpload.mediaUpload.progressObserver.subscribe(
      (progress: any) => {
        if (progress.type === 'UPLOAD-FINISHED' && progress.uploadFinished) {
          if (progress.successfulFileCount == mediaItems) {
            console.log('upload done');
            this._router.navigate(['/ugc/upload/upload-success'], { queryParams: StaticUtils.queryParams });
          }
        }
      }
    )
  }
  public fileFormatSize(fileSize: number) {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    if (fileSize === 0) {
      return '0 Byte';
    }
    let i = parseInt((Math.floor(Math.log(fileSize) / Math.log(1024))).toString());
    return (fileSize / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
  };

  private renderPreview() {
    if (this.mediaFileObject !== undefined) {
      this.isImage = (this.mediaFileObject.mediaData.mediaType === 'photo');
      let URL = window.URL;
      let fileUrl = URL.createObjectURL(this.mediaFileObject.blob);
      this.previewUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    }
  }
  private onMouseEnter() {
    this.showClose = true;
  }
  private onMouseLeave() {
    if (this.mobilePreview) {
      this.showClose = true;
    }
    this.showClose = false;

  }
  private removeMedia() {
    this.evEmitterForRemovingFiles.emit(this.fileIndex);
  }
}
