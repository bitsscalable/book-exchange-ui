import { Component, Input, input, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BooksService } from '../books.service';
import { MessageService } from 'primeng/api';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrl: './display-images.component.css'
})
export class DisplayImagesComponent implements OnInit {
  @Input() visible!: boolean;
  @Input() data!: any;
  comments!:String;
  date!:Date;

  
  responsiveOptions: any[] | undefined;

  constructor(private _service: BooksService, private _alert : MessageService) {}

  ngOnInit() {
    
  }

    showDialog() {
        this.visible = true;
    }


    sendRequest(data:any){

        this._service.requestBook(data.bookId).subscribe();
        this._alert.add({severity: 'success', summary: 'Success', detail: 'Book Requested Successfully' })
        setTimeout(()=>{
            this.visible = false,300000
        })
        


    }



       
    

   
}
