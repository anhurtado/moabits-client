import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleGuard } from 'src/app/core/guards/title.guard';
import { LoginIndexComponent } from './containers/login-index/login-index.component';
import { RegisterIndexComponent } from './containers/register-index/register-index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [TitleGuard],
    data: { title: 'Login' },
    component: LoginIndexComponent,
  },
  {
    path: 'register',
    canActivate: [TitleGuard],
    data: { title: 'Register' },
    component: RegisterIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
