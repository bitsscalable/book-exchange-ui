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

  


}
