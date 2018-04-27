import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MediaFile } from '../../services/media-upload/file/file.service';

@Component({
  selector: 'ugc-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input('mediaFileObject') public mediaFileObject: MediaFile;
  @Input('fileIndex') public fileIndex: number;
  @Input('mobilePreview') public mobilePreview: boolean;
  @Output() public evEmitterForRemovingFiles = new EventEmitter<any>();

  public previewUrl: SafeResourceUrl = '';
  private showClose: Boolean = false;
  public isImage: boolean;

  constructor(public domSanitizer: DomSanitizer) {
  }

  public ngOnInit() {
    this.renderPreview();
    if (this.mobilePreview) {
      this.showClose = true;
    }
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
      console.log(this.mediaFileObject.blob);
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
