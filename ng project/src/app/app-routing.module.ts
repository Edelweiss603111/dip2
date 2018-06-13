import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/global/page-not-found/page-not-found.component';
import {AuthGuard} from './services/auth/auth.guard';
import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   // redirectTo: 'auth',
  //   // pathMatch: 'full',
  //   loadChildren: 'app/components/layout/layout.module#LayoutModule',
  //   data: {title: 'Lime'}
  // },
  {
    path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [
      {   path: '',
          redirectTo: 'installations',
          pathMatch: 'full',
      },
      {
        path: 'installations',
        canActivate: [AuthGuard],
        loadChildren: 'app/components/installation/installation.module#InstallationModule',
        data: {title: 'My installations'}
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: 'app/components/profile/profile.module#ProfileModule',
        data: {title: 'Profile'}
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: 'app/components/auth/auth.module#AuthModule',
    data: {title: 'Authorization'}
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {title: 'Page not found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // {enableTracing: true} // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
