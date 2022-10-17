import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordViewComponent } from './view/forgot-password-view/forgot-password-view.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { RegisterViewComponent } from './view/register-view/register-view.component';
import { ResetPasswordViewComponent } from './view/reset-password-view/reset-password-view.component';
import { VerifyEmailViewComponent } from './view/verify-email-view/verify-email-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginViewComponent,
  },
  {
    path: 'register',
    component: RegisterViewComponent,
  },
  {
    path: 'verify-email',
    component: VerifyEmailViewComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordViewComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
