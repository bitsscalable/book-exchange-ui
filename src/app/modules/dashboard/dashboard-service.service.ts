import { Injectable } from '@angular/core';
import { Endpoints } from '../../shared/variables/endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private _rest: HttpClient) { }


  getUserName(){
    return this._rest.get<string>(Endpoints.GET.GET_USER_NAME,{ responseType: 'text' as 'json' });
  }

  getBookCounts(): Observable<number[]>{
    return this._rest.get<number[]>(Endpoints.GET.GET_BOOK_COUNTS);
  }
}
