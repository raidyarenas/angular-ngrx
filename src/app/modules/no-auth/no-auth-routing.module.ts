import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent, LoginComponent, RegisterComponent} from './components';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoAuthRoutingModule { }
