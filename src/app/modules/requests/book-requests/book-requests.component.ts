import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BooksService } from '../../books/books.service';

@Component({
  selector: 'app-book-requests',
  templateUrl: './book-requests.component.html',
  styleUrl: './book-requests.component.css'
})
export class BookRequestsComponent implements OnInit{
  transactions!:any;

  loading: boolean = true;

  currentBook !:any;
  visible: boolean = false;
  rejectVisible: boolean = false;
  updateBookForm !: FormGroup;
  
  activityValues: number[] = [0, 100];

  constructor(private _confirmationService:ConfirmationService, 
    private _alert :MessageService, private _service: BooksService,
  private _fb:FormBuilder) {
  }

  ngOnInit() {
    this._service.getBookRequests().subscribe(res=>{
      this.transactions = res;
      console.log('getBookRequests',res)
      this.loading = false;
    })
      
  }

  clear(table: Table) {
      table.clear();
  }

  click($event: any){
    console.log($event)
  }


  

  approve(event: Event, book :any) {
    console.log('here')
    this.currentBook = book;
    this.showDialog()
  }

  reject(event: Event, book :any){
    this.currentBook = book;
    this.rejectVisible = true;
  }


  showDialog() {
      this.visible = true;
      
  }

  approveRequest(currentBook:any,status :number){
    
    this._service.updateRequestStatus(currentBook.requestId,status).subscribe(res=>{
      console.log(res)
    })
    this.visible = false;
    if(status===1){
      this._alert.add({severity: 'success', summary: 'Approved', detail: 'Book request approved successfully' })
    }else{
      this._alert.add({severity: 'success', summary: 'Rejected', detail: 'Book request rejected successfully' })
    }
    
    window.location.reload()
  }

  rejectRequest(currentBook:any){
    
    this._service.updateRequestStatus(currentBook.requestId,2).subscribe(res=>{
      console.log(res)
    })
    this.visible = false;
    this._alert.add({severity: 'warn', summary: 'Rejected', detail: 'Book request rejected successfully' })
    window.location.reload()
  }
}
