import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { RegisterViewComponent } from './view/register-view/register-view.component';
import { ResetPasswordViewComponent } from './view/reset-password-view/reset-password-view.component';
import { VerifyEmailViewComponent } from './view/verify-email-view/verify-email-view.component';
import { ForgotPasswordViewComponent } from './view/forgot-password-view/forgot-password-view.component';

@NgModule({
  declarations: [
    LoginViewComponent,
    RegisterViewComponent,
    ResetPasswordViewComponent,
    VerifyEmailViewComponent,
    ForgotPasswordViewComponent,
  ],
  exports: [
    LoginViewComponent,
    RegisterViewComponent,
    ResetPasswordViewComponent,
    VerifyEmailViewComponent,
  ],
  imports: [AuthRoutingModule, CoreModule],
})
export class AuthModule {}
