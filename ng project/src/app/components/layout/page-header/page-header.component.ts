import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Language} from 'angular-l10n';
import {ConfigService} from '../../../services/config.service';
import {DescriptionService} from '../../../services/description.service';

@Component({
  selector: 'lime-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  animations: []
})
export class PageHeaderComponent implements OnInit, AfterViewInit {
  @Language() lang: string;
  @Input() title = '';


  private _descriptionOpened = true;
  private _descriptionText: string = '';

  @ViewChild('arrow') viewArrow: ElementRef;
  @ViewChild('pageDescriber') viewPageDescriber: ElementRef;

  constructor(
    private _renderer: Renderer2,
    private _config: ConfigService,
    private _descriptionService: DescriptionService
  ) {
  }

  ngOnInit() {
  }


  private toggleDescription() {
    if (this._descriptionOpened) {
      this._renderer.setStyle(this.viewArrow.nativeElement, 'transform', 'rotate(-180deg)');
      this.hideDescription();
    } else {
      this._renderer.setStyle(this.viewArrow.nativeElement, 'transform', 'rotate(0deg)');
      this.showDescription();
    }

    this._descriptionOpened = !this._descriptionOpened;
  }

  hideDescription() {
    console.log('hide');
    this._renderer.setStyle(this.viewPageDescriber.nativeElement, 'visibility', 'hidden');
    this._renderer.setStyle(this.viewPageDescriber.nativeElement, 'display', 'none');
  }

  showDescription() {
    this._renderer.setStyle(this.viewPageDescriber.nativeElement, 'visibility', 'visible');
    this._renderer.setStyle(this.viewPageDescriber.nativeElement, 'display', 'block');
  }

  ngAfterViewInit(): void {
    this._descriptionService.getDescription(this.title).subscribe(x => {
      if (x) {
        this._descriptionText = x;
      }
    });

    this._descriptionOpened = this._config.showPageDescription;

    if (this._descriptionOpened) {
      this.showDescription();
    } else {
      this.hideDescription();
    }
  }

}
