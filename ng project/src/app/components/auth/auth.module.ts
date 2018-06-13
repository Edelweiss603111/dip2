import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {GlobalModule} from '../global/global.module';
import {
  DxAutocompleteModule,
  DxButtonModule, DxCheckBoxModule,
  DxColorBoxModule,
  DxFormModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxSwitchModule,
  DxTextBoxModule
} from 'devextreme-angular';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    GlobalModule,

    DxSelectBoxModule,
    DxTextBoxModule,
    DxColorBoxModule,
    DxNumberBoxModule,
    DxSwitchModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxFormModule,
    AuthRoutingModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    AuthComponent
  ],
  exports: [
    RegistrationComponent,
    LoginComponent,
    AuthComponent
  ]
})
export class AuthModule {
}
