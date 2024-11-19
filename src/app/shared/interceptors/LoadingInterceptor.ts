// loading.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    return next.handle(req).pipe(
      tap(
        (res) => {
          this.loadingService.hide();
        },
        (err) => {
          console.log(err);
          this.loadingService.hide();
        },
        () => {
          // Hide the loading spinner after the request is completed
          this.loadingService.hide();
        }
      )
    );
  }

  show(){
    this.loadingService.show();
  }

  hide(){
    this.loadingService.hide();
  }

}
