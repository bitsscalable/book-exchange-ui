import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BooksService } from '../books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-your-books',
  templateUrl: './your-books.component.html',
  styleUrl: './your-books.component.css'
})
export class YourBooksComponent implements OnInit{
  transactions!:any;

  loading: boolean = true;

  currentBook !:any;
  visible: boolean = false;
  updateBookForm !: FormGroup;
  
  activityValues: number[] = [0, 100];

  constructor(private _confirmationService:ConfirmationService, 
    private _alert :MessageService, private _service: BooksService,
  private _fb:FormBuilder) {
    this.initForm()
  }

  ngOnInit() {
    this.initForm;
    this._service.getMyBooks().subscribe(res=>{
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


  deleteBook(event: Event, book :any) {
    console.log('here')
    this._confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to remove this book from your library?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
          this._service.deleteBook(book.bookId).subscribe(res=>{
            console.log(res);
          })
          this._alert.add({ severity: 'warning', summary: 'Deleted', detail: 'Your book has been deleted successfully' });
          window.location.reload();
        },
        reject: () => {
            // this._alert.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
        
    });
  }

  editBook(event: Event, book :any) {
    console.log('here')
    this.currentBook = book;
    this.showDialog()
  }

  initForm(){
    this.updateBookForm = this._fb.group({
      bookId:[this.currentBook?.bookId?this.currentBook?.bookId: null],
      bookCondition: [this.currentBook?.bookCondition?this.currentBook?.bookCondition : null,[Validators.required]],
      lendBookFor: [this.currentBook?.lendBookFor?this.currentBook?.lendBookFor : null,[Validators.required]],
      isDeliverable: [this.currentBook?.isDeliverable?this.currentBook?.isDeliverable : null,[Validators.required]],
      pincode: [this.currentBook?.pincode?this.currentBook?.pincode : null,[Validators.required]],
    })
  }

  showDialog() {
      this.visible = true;
      this.initForm();
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
