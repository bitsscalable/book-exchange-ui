import { Component } from '@angular/core';
import { genre } from '../../../shared/variables/genres';
import { MessageService } from 'primeng/api';
import { pvt } from '../../../shared/variables/privateVariables';
import { LoadingService } from '../../../shared/services/loading.service';
import { LoadingInterceptor } from '../../../shared/interceptors/LoadingInterceptor';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.css'
})
export class SearchBookComponent {
author !: String;
title !: String;
pincode!: string;
area ='';
data !:any;
genres!: genre[];
selectedGeneres!: genre[];
display = false;
isLoading = false;


  constructor(private _alert : MessageService){

  }


  ngOnInit() {
      this.genres = [
          { name: 'Horrer', code: 'NY' },
          { name: 'Rom-Com', code: 'RM' },
          { name: 'Fiction', code: 'LDN' },
          { name: 'Fantacy', code: 'IST' },
          { name: 'Scifi', code: 'PRS' }
      ];
  }

  search(){
    if(this.selectedGeneres || this.author || this.title || this.pincode){
      this.data = {
        selectedGeneres : this.selectedGeneres,
        author: this.author,
        title : this.title,
        pincode : this.pincode
      }
    }else{
      this._alert.add({severity: 'error', summary: 'Empty form', detail: 'Please enter atleast one filter.' })
    }
   
  }

  getArea(){
    if(this.pincode.length===6){
     this.getAreaDetails();
    }
    
  }

  getAreaDetails() {
    const url = new URL("https://cors-anywhere.herokuapp.com/https://api.zipcodestack.com/v1/search");

    const params = {
        codes: this.pincode,
        country: "in"
    };

    url.searchParams.append('codes', this.pincode);
    url.searchParams.append('country', params.country);

    const headers = {
        "apikey": pvt.API_KEYS.ZIP_CODE_SERVICE,
        "Accept": "application/json",
    };

    fetch(url, {
        method: "GET",
        headers,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const obj = data;
        const location = obj['results'][this.pincode][0]['state'] +' , '+ obj['results'][this.pincode][0]['city'];
        this.area = location;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

}
