import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { AlertModule } from '../../../shared/alert/alert.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  emailid: String = '';
  olduser = false;
  verified = false;
loading = false;

  constructor(private _service:AuthorizationService, private _alert: MessageService){
    
  }

  load(){
    this.loading = !this.loading
    this.verified = true;
    this._service.verifyEmail(this.emailid).subscribe((res)=>{
      this.olduser = res;
        this._alert.add({ severity: 'success', summary: 'Success', detail: 'Login Credentials have been sent to your email.' })
    })
    this.loading = !this.loading
  }

  
}

@Component({
  selector: 'app-verification-failed',
  template:`<h1>Hello, World!</h1>
    <p>This is an inline template.</p>`,
  styleUrl: './signup.component.css'
})
export class VerificationFailedComponent{



}

