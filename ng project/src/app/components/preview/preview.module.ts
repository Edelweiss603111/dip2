import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { PreviewComponent } from './preview/preview.component';
import { PreviewEditComponent } from './previewEdit/previewEdit.component';
import {PreviewRoutingModule} from './preview-routing.module';
import {SharedModule} from '../../shared/shared.module';

import {OrganizationsClient, InstallationUsersClient} from '../../../../api';
import { DxDataGridModule, DxCheckBoxModule, DxButtonModule, DxPopupModule, DxTextAreaModule, DxFormModule, DxTextBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    SharedModule,
    PreviewRoutingModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxFormModule,
    LayoutModule
  ],
  declarations: [PreviewComponent, PreviewEditComponent],
  exports: [PreviewComponent, PreviewEditComponent],
  providers: [
    OrganizationsClient, InstallationUsersClient
  ]
})
export class PreviewModule { }
