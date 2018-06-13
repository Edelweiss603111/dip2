import {
  Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MenuItem} from '../menu-item.model';

@Component({
  selector: 'lime-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() isOpened: boolean = false;
  @Input() isChild: boolean = false;
  @Input() item: MenuItem;
  pageTitle: string = '';

  constructor(private _renderer: Renderer2) {
  }

  ngOnInit() {
  }

  toggleSubLevel() {
    this.isOpened = !this.isOpened;
    }

}
