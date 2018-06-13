import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {ProfileRoutingModule} from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {DxButtonModule, DxFormModule, DxTextBoxModule} from 'devextreme-angular';
import {CustomFormsModule} from 'ng2-validation';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    LayoutModule,
    ProfileRoutingModule,
    DxTextBoxModule,
    DxFormModule,
    DxButtonModule,
    CustomFormsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
