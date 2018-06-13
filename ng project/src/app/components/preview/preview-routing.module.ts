import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {PreviewEditComponent} from './previewEdit/previewEdit.component';
import { AuthGuard } from '../../services/auth/auth.guard';
import { LayoutComponent } from '../layout/layout.component';



const routes: Routes = [
 // {path: '', component: PreviewComponent, data: {title: 'Тест'}, children: [
 // {path: 'Edit/:id', component: PreviewEditComponent, data: {title: 'Edit'}} ]}
  //children: [
  //     {path: '', redirectTo: 'login', pathMatch: 'full'},
  //     {path: 'login', component: LoginComponent, data: {title: 'Авторизация'}},
  //     {path: 'registration', component: RegistrationComponent, data: {title: 'Регистрация'}}
  //   ]}
  //
  // {
  //   // path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [
  //   //   {path: 'hi', data: {title: 'My organizations'}, children: [
  //         {path: '', component: PreviewComponent, data: {title: 'My organizations'}},
  //         {path: 'Edit/:organizationId', component: PreviewEditComponent, data: {title: 'Organization settings'}},
  //         // {path: '**', redirectTo: '/preview/organizations', pathMatch: 'full'}
  //   //     ]
  //   //   }
  //   // ]
  // }

          // {path: '', component: PreviewComponent},
          {path: '', component: PreviewComponent},
          {path: 'Edit/:organizationId', component: PreviewEditComponent, data: {title: 'Organization settings'}},
          {path: '**', redirectTo: '/preview/organizations', pathMatch: 'full'}
  // {
  //   path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [
  //     {
  //       path: 'organizations', data: {title: 'My organizations'}, children: [
  //         {path: '', component: PreviewComponent},
  //         {path: 'Edit/:organizationId', component: PreviewEditComponent, data: {title: 'Organization settings'}},
  //         {path: '**', redirectTo: '/preview/organizations', pathMatch: 'full'}
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewRoutingModule { }
