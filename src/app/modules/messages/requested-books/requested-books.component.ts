import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BooksService } from '../../books/books.service';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrl: './requested-books.component.css'
})
export class RequestedBooksComponent implements OnInit{
  transactions!:any;

  loading: boolean = true;

  currentBook !:any;
  visible: boolean = false;
  updateBookForm !: FormGroup;
  
  activityValues: number[] = [0, 100];

  constructor(private _confirmationService:ConfirmationService, 
    private _alert :MessageService, private _service: BooksService,
  private _fb:FormBuilder) {
  }

  ngOnInit() {
    this._service.getRequestedBooks().subscribe(res=>{
      this.transactions = res;
      this.loading = false;
    })
      
  }

  clear(table: Table) {
      table.clear();
  }

  click($event: any){
    console.log($event)
  }


  openDialogue(event: Event, book :any) {
    console.log(book)
    this.currentBook = book;
    this.visible = true;
  }

  cancelRequest( book :any,status:number) {
    console.log('here')
    this.currentBook = book;
    this._service.updateRequestStatus(this.currentBook.requestId, status).subscribe(res=>{
      console.log(res);
    })
    this.visible = false;

      this._alert.add({severity: 'info', summary: 'Cancelled', detail: 'Book request cancelled successfully' })
   
      window.location.reload()
    
  }

  sendMail(book: any) {
    const email = book.uploadedBy; 
    const subject = '📚 Our Book Request Was a Match! Let’s Connect!';
    const body = 'Hii, '+sessionStorage.getItem('username');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  }


}
