import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing';
import { LoginIndexComponent } from './containers/login-index/login-index.component';
import { RegisterIndexComponent } from './containers/register-index/register-index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [LoginIndexComponent, RegisterIndexComponent, LoginFormComponent, RegisterFormComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
