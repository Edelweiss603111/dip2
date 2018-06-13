import { NgModule } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuItemModule} from './menu-item/menu-item.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MenuItemModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
