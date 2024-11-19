import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';


export interface BookDetails {
  bookCondition: string;
  title: number;
  isDeliverable: number;
  pincode: string;
  author:string
}

const data: BookDetails[] = [];

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrl: './available-books.component.css'
})
export class AvailableBooksComponent  implements OnInit{

  @Input() searchFields !: any;

  visible = false;
  row!:any;
  displayedColumns: string[] = ['title','author', 'bookCondition', 'isDeliverable', 'pincode'];
  data = data;
  clickedRows = new Set<BookDetails>();

  constructor(private _service : BooksService){

  }
  ngOnInit(): void {
    this.getAvailableBooks();

  }

  rowSelected(row : any){
    console.log(row);
    this.visible = !this.visible;
    this.row = row;
  }

  getAvailableBooks(){
    let genres:any=[];
    if(this.searchFields.selectedGeneres){
      genres  = this.searchFields.selectedGeneres.map((element: any) => element.code);
    }


    this._service.getAvailableBooks(this.searchFields.pincode,this.searchFields.author,this.searchFields.title,genres).subscribe(res=>{
      console.log(res);
      this.data = res;
    })
  }

}

