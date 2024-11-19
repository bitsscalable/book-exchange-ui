import { Component, Input, OnInit } from '@angular/core';
import { pvt } from '../../../shared/variables/privateVariables';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-condition-info',
  templateUrl: './book-condition-info.component.html',
  styleUrl: './book-condition-info.component.css'
})
export class BookConditionInfoComponent implements OnInit {
  @Input() addBookForm !: FormGroup;

  
  value!: number;
  days!: String;
  otp!: String;
  area: String = '';
  ingredient!: string;
  pincode = ''
  placeholderText: string = 'In days';
  once = false;


  ngOnInit(): void {
  }

  getArea(){
    if(this.addBookForm.controls['pincode'].value.length===6){
      this.getAreaDetails(this.addBookForm.controls['pincode'].value+'')
    }
  }

  getAreaDetails(pincode:string) {
    const url = new URL("https://cors-anywhere.herokuapp.com/https://api.zipcodestack.com/v1/search");

    const params = {
        codes: pincode,
        country: "in"
    };

    url.searchParams.append('codes', params.codes);
    url.searchParams.append('country', params.country);

    const headers = {
        "apikey": pvt.API_KEYS.ZIP_CODE_SERVICE,
        "Accept": "application/json",
        'x-requested-with': 'XMLHttpRequest',
    };

    fetch(url, {
        method: "GET",
        headers,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const obj = data;
        const location = obj['results'][pincode][0]['state'] +' , '+ obj['results'][pincode][0]['city'];
        this.area = location;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}


}
