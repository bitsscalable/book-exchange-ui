import { Injectable } from '@angular/core';
import { RestService } from '../../shared/rest/rest.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Endpoints } from '../../shared/variables/endpoints';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private _rest : HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this._rest.post('http://54.80.98.85:8080/auth/login', { username, password })
      .subscribe((response: any) => {
        sessionStorage.setItem('token', response.token); // Save JWT to session storage. so that when tab is closed user is logged out
        this.router.navigate(['/dashboard']); // Redirect to dashboard upon success
      });
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }


  public verifyEmail(emailId: any):Observable<any>{
    let params = new HttpParams().set('email', emailId);

    return this._rest.get(Endpoints.GET.VERIFY_EMAIL,{ params: params });
  }

  public updatePassword(form : FormData):Observable<any>{
    let params = form;
    return this._rest.post(Endpoints.POST.UPDATE_PASSWORD,form, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public signUpNewUser(form : FormData):Observable<any>{
    let params = form;
    return this._rest.post(Endpoints.POST.SIGN_UP_USER,form, {
      headers: { 'Content-Type': 'application/json' },
  })
}
}
