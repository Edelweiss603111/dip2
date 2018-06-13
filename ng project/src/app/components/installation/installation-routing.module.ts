import {NgModule} from '@angular/core';
import {AuthGuard} from '../../services/auth/auth.guard';
import {RouterModule, Routes} from '@angular/router';
import {InstallationSettingsComponent} from './installation-settings/installation-settings.component';
import {MyInstallationsComponent} from './my-installations/my-installations.component';
import {CreateInstallationComponent} from './create-installation/create-installation.component';

const routes: Routes = [
  // {
  //   path: '', canActivate: [AuthGuard], children: [
      {path: '', component: MyInstallationsComponent},
      {path: 'create', component: CreateInstallationComponent, data: {title: 'Creating of the installation'}},
      {
        path: ':installationId', // component: InstallationSettingsComponent,
        data: {title: 'Installation settings'}, children: [

          {path: '', component: InstallationSettingsComponent},
          {path: 'edit', component: CreateInstallationComponent},
          {
            path: 'organizations',
            canActivate: [AuthGuard],
            loadChildren: 'app/components/preview/preview.module#PreviewModule',
            data: {title: 'Organizations'}
          }
        ]
      }
    // ]
  // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallationRoutingModule {
}
