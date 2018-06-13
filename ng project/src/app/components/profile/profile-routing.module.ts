import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../services/auth/auth.guard';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [

      {path: '', component: ProfileComponent},
      // {path: '**', redirectTo: '/profile', pathMatch: 'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
