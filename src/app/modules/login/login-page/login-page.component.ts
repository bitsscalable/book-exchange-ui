import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModule } from '../../../shared/alert/alert.module';
import { Message, MessageService } from 'primeng/api';
import { AlertServiceService } from '../../../shared/alert/alert-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  registerForm: FormGroup;
  isloading = false;
  message : Message =  {severity: 'success', summary: 'Success', detail: 'Message Content' }
  ;
  constructor(private fb: FormBuilder, private http: HttpClient,private _alert: MessageService,private authService: AuthService,
     private router: Router
  ) {

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
      this.registerForm = this.fb.group({
          username: [null, Validators.required],
          password: [null, [Validators.required, Validators.minLength(6)]]
      });
  }

load(){
  const pwd = this.registerForm.controls['password'].value;
    this.authService.login(this.registerForm.controls['username'].value, pwd).subscribe(
      (res) => {
        console.log('Login successful');
      },
      error => {
        console.error('Login failed', error);
        this._alert.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid Credentials.' })
      }
    );
}

}

