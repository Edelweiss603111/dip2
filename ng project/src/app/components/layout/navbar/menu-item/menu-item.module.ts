import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuItemComponent} from './menu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuItemComponent
  ],
  exports: [MenuItemComponent],
  entryComponents: [MenuItemComponent]
})
export class MenuItemModule { }
