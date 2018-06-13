import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../../shared/shared.module';
import { LocalizationComponent } from './localization/localization.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PageNotFoundComponent,
    FooterComponent,
    LocalizationComponent,
    PaginatorComponent,
  ],
  exports: [
    PageNotFoundComponent,
    FooterComponent,
    LocalizationComponent,
    PaginatorComponent
  ]
})
export class GlobalModule { }
