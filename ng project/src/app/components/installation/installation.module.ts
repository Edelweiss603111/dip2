import { NgModule } from '@angular/core';
import {InstallationRoutingModule} from './installation-routing.module';
import {LayoutModule} from '../layout/layout.module';
import { InstallationSettingsComponent } from './installation-settings/installation-settings.component';
import {MyInstallationsComponent} from './my-installations/my-installations.component';
import { CreateInstallationComponent } from './create-installation/create-installation.component';
import {SharedModule} from '../../shared/shared.module';
import {DxButtonModule, DxTextBoxModule} from 'devextreme-angular';
import {GlobalModule} from '../global/global.module';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    InstallationRoutingModule,
    GlobalModule,
    DxTextBoxModule
  ],
  declarations: [InstallationSettingsComponent, MyInstallationsComponent, CreateInstallationComponent]
})
export class InstallationModule { }
