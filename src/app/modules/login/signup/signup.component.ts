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
  verified = false;
loading = false;

  constructor(private _service:AuthorizationService, private _alert: MessageService){
    
  }

  load(){
    this.loading = !this.loading
    this.verified = true;
    this._service.verifyEmail(this.emailid).subscribe((res)=>{
        this._alert.add({ severity: 'success', summary: 'Success', detail: 'Login Credentials have been sent to your email.' })
    })
    this.loading = !this.loading
  }

  
}

@Component({
  selector: 'app-verification-failed',
  template:`<h1>Oops!</h1>
    <p>Verification Failed. Please try again.</p>`,
  styleUrl: './signup.component.css'
})
export class VerificationFailedComponent{



}

