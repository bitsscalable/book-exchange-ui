import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { Endpoints } from '../variables/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(Endpoints.POST.LOGIN, { username, password }).pipe(
      tap(response => {
        sessionStorage.setItem('token', response.token); // Store JWT
        this.router.navigate(['/dashboard']); // Redirect on successful login
      })
    );
  }
  

  getToken() {
    return sessionStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    this.router.navigate(['/login']);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    window.location.reload()
    return !this.getToken();
    
  }
}
