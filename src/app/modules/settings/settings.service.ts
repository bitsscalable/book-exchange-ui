import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../shared/variables/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private _rest: HttpClient) { }

  getSettings(){
    return this._rest.get(Endpoints.GET.GET_SETTINGS);
  }

  saveSettings(selectedGeneres:any,selectedLanguages:any): Observable<any> {
    let params = new HttpParams().set('genres',selectedGeneres).append('languages',selectedLanguages);
    console.log('params',params)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params
    };
    return this._rest.post(Endpoints.POST.SAVE_SETTINGS, options);
}
  
}
