import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../../shared/alert/alert.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AlertServiceService } from '../../shared/alert/alert-service.service';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SignupComponent, VerificationFailedComponent } from './signup/signup.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ResetPasswordComponent, SignUpUserComponent } from './reset-password/reset-password.component';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupComponent,
    VerificationFailedComponent,
    ResetPasswordComponent,
    SignUpUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    AlertModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    FloatLabelModule,
    FileUploadModule,
    CardModule],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
