import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter, Input,OnInit } from '@angular/core';
import { UgcCustomizationService } from '../../../../../ugc-shared/services/ugc-customization/ugc-customization.service'

@Component({
  selector: 'media-adder',
  templateUrl: './media-adder.component.html',
  styleUrls: ['./media-adder.component.scss', './media-adder.component.theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MediaAdderComponent implements OnInit {
  @Output()
  public onFileSelected: EventEmitter<UIEvent> = new EventEmitter();
  @Output()
  public onFileSelectedMobile: EventEmitter<UIEvent> = new EventEmitter();
  @Input()
  public selectedFileCount: number;
  @Input() 
  public mobilePreview:boolean;
  public withImage:boolean=false;

  public displayCountPrompt: string;
  public mediaTitle: string;
  constructor(
    private _changeDetector: ChangeDetectorRef,
    private _customizationService: UgcCustomizationService
  ) {
    this.setText();

  }

  public fileSelected(eve: UIEvent) {
      this.onFileSelected.emit(eve);
      
  }
ngOnInit(){
 this.withImage=this.mobilePreview;
}
  private setText() {
    this.displayCountPrompt = this._customizationService.locales.current().addMediaNumberDisplay;
    this.mediaTitle = this._customizationService.locales.current().addMediaPageTitle;
  }
}
