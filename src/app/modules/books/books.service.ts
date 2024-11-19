import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Endpoints } from '../../shared/variables/endpoints';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _rest: HttpClient) { }

  addBook(book:FormData): Observable<any> {

      return this._rest.post(Endpoints.POST.ADD_NEW_BOOK, book);
  }
  
  getAvailableBooks(pincode:any,author:any,title:any,selectedGeneres:any): Observable<any> {
    let params = new HttpParams().set('pincode',pincode).append('author',author).append('title',title).append('genres',selectedGeneres);
    console.log('params',params)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params
    };
    return this._rest.get(Endpoints.GET.GET_BOOKS,options);
}

  getMyBooks(){
    return this._rest.get(Endpoints.GET.GET_MY_BOOKS);
  }

  getRequestedBooks(){
    return this._rest.get(Endpoints.GET.GET_REQUESTED_BOOKS);
  }

  getBookRequests(){
    return this._rest.get(Endpoints.GET.GET_BOOK_REQUESTS);
  }

  getAllTransactiond(){
    return this._rest.get(Endpoints.GET.GET_ALL_TRANSACTIONS);
  }

  updateBook(book:any){
    return this._rest.post(Endpoints.POST.UPDATE_BOOK, book);
  }

  updateRequestStatus(requestId:number,status:number){
    let params = new HttpParams().set('requestId',requestId).append('status',status)
    return this._rest.post(Endpoints.POST.UPDATE_REQUEST_STATUS, params);
  }

  approveRequest(book:any){
    return this._rest.post(Endpoints.POST.UPDATE_BOOK, book);
  }

  deleteBook(bookId:number){
    let params = new HttpParams().set('bookId',bookId)
    return this._rest.post(Endpoints.POST.DELETE_BOOK, params);
  }

  requestBook(bookId:number){
    let params = new HttpParams().set('bookId',bookId)
    return this._rest.post(Endpoints.POST.REQUEST_BOOK, params);
  }
  
}
