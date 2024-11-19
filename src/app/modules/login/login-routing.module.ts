import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent, VerificationFailedComponent } from './signup/signup.component';
import { ResetPasswordComponent, SignUpUserComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path:'verificationFailed',
        component: VerificationFailedComponent
    },
    {
        path:'resetPassword',
        component:ResetPasswordComponent
    },
    {
        path:'signup-user',
        component:SignUpUserComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
