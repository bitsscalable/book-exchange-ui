import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrl: './all-transactions.component.css'
})
export class AllTransactionsComponent implements OnInit{
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
    this._service.getAllTransactiond().subscribe(res=>{
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


  

  editBook(event: Event, book :any) {
    console.log('here')
    this.currentBook = book;
    this.showDialog()
  }

  deleteBook(event: Event, book :any){
    
  }


  showDialog() {
      this.visible = true;
      
  }

  updateBookDetails(currentBook:any){
    console.log(this.currentBook);
    console.log(this.updateBookForm.controls['bookId']);
    const data = this.updateBookForm.getRawValue();
    data.bookId = currentBook.bookId;
    this._service.updateBook(data).subscribe(res=>{
      console.log(res)
      
      
    })
    this.visible = false;
    this._alert.add({severity: 'success', summary: 'Book Updated', detail: 'Book updated successfully' })
    window.location.reload()
  }
}
