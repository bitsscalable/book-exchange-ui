import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthorizationService } from '../authorization.service';
import { timeInterval } from 'rxjs';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit{

  registerForm: FormGroup;
  isloading = false;
  passwordsMatch = true;
  email: any='';

  constructor(private fb: FormBuilder, private http: HttpClient,private messageService: MessageService,
    private router: Router, private _service: AuthorizationService,private route: ActivatedRoute){
    this.registerForm = this.fb.group({
      password: [null, [Validators.required,Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required,Validators.minLength(6)]]
      
  },{ validator: this.passwordMatchValidator});
  }
  ngOnInit(): void {
    
    this.email = this.route.snapshot.queryParamMap.get('email');
    console.log(this.email); 

  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if(password===confirmPassword){
      console.log('match')
    }else{
      console.log('no match',password,confirmPassword)
    }
    return password === confirmPassword ? null : { mismatch: true };
  }

  load(){
    this.isloading = true;
    const data = this.registerForm.getRawValue();
    data.email = this.email;
    this._service.updatePassword(data).subscribe((res)=>{
      this.messageService.add({ severity: 'success', summary: 'Password Updated Successfully', detail: 'You can go ahead and login.' })
      setTimeout(()=>{
        this.router.navigate(['/login']),300000
      })
      
    },err=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while updating password. Please try Email Verification again.' })
      setTimeout(()=>{
        this.router.navigate(['/signup']),300000
      })
    })
  }

  change(){
    console.log('change')
    this.messageService.add({ severity: 'success', summary: 'Password Updated Successfully', detail: 'You can go ahead and login.' })
  }


}


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
   styleUrl: './reset-password.component.css'
})
export class SignUpUserComponent implements OnInit{
 
email: any;
isloading = false;
signUpForm: FormGroup;

constructor(private fb :FormBuilder,private route: ActivatedRoute,private router: Router,private _authService: AuthorizationService, private _alert : MessageService){
  this.signUpForm = this.fb.group({
    password: [null, [Validators.required,Validators.minLength(6)]],
    confirmPassword: [null, [Validators.required,Validators.minLength(6)]],
    firstName:[null,[Validators.required]],
    middleName:[null],
    lastName:[null,[Validators.required]],
    email:[this.email]
})
}
  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.signUpForm.controls['email'].setValue(this.email)
  }

  submitForm(){
    const data = this.signUpForm.getRawValue();
    this._authService.signUpNewUser(data).subscribe((res)=>{
      this._alert.add({ severity: 'success', summary: 'Signed Up Successfully', detail: 'You can go ahead and login.' })
      setTimeout(()=>{
        this.router.navigate(['/login']),30000
      })
    }, err=>{
      this._alert.add({ severity: 'error', summary: 'Error', detail: 'Try verification again.' });
      setTimeout(()=>{
        this.router.navigate(['/signup']),30000
      })
    })
  }

}
