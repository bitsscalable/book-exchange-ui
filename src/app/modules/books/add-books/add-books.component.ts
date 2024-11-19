import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { pvt } from '../../../shared/variables/privateVariables';
import { BooksService } from '../books.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent implements OnInit{
  addBookForm!: FormGroup;

constructor(private fb: FormBuilder, private _service : BooksService, private _alert :MessageService){

}
  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      title: [, [Validators.required]],
      genres: [[],[Validators.required]],
      author: [,[Validators.required]],
      summary: [,[Validators.required,Validators.minLength(20)]],
      categories: [[],[Validators.required]],
      bookCondition:[0,[Validators.required]],
      lendBookFor:[,[Validators.required]],
      pincode:[,[Validators.required]],
      isDeliverable:[,[Validators.required]]

    });

  }

  submit() {
    const formData = new FormData();
  
    const bookData = this.addBookForm.getRawValue();
    bookData.categories = this.addBookForm.controls['categories'].value.map((element: any) => element.code);
    bookData.genres = this.addBookForm.controls['genres'].value.map((element: any) => element.code);

    this._service.addBook(bookData).subscribe(res => {
      this._alert.add({severity: 'success', summary: 'Book Added', detail: 'Book added successfully' })
    });
  }
   

}