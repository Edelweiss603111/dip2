import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NavbarModule} from './navbar/navbar.module';
import {GlobalModule} from '../global/global.module';

import {LayoutComponent} from './layout.component';
import {AccountBlockComponent} from './account-block/account-block.component';
import {MainBarComponent} from './main-bar/main-bar.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {InstallationSelectorComponent} from './installation-selector/installation-selector.component';
import {DxLookupModule} from 'devextreme-angular';
import {SharedModule} from '../../shared/shared.module';
import {DomhandlerService} from '../../services/domhandler.service';
import { PageHeaderComponent } from './page-header/page-header.component';


@NgModule({
  imports: [
    NavbarModule,
    GlobalModule,
    RouterModule,
    DxLookupModule,
    SharedModule
  ],
  declarations: [
    MainBarComponent,
    BreadcrumbComponent,
    LayoutComponent,
    AccountBlockComponent,
    InstallationSelectorComponent,
    PageHeaderComponent
  ],
  exports: [
    MainBarComponent,
    BreadcrumbComponent,
    LayoutComponent,
    AccountBlockComponent,
    InstallationSelectorComponent,
    PageHeaderComponent
  ],
  providers: [
    DomhandlerService
  ]
})
export class LayoutModule { }
