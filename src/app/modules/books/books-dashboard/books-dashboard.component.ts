import { Component } from '@angular/core';

@Component({
  selector: 'app-books-dashboard',
  templateUrl: './books-dashboard.component.html',
  styleUrl: './books-dashboard.component.css'
})
export class BooksDashboardComponent {

  tabChange(tab:Number){
    console.log(tab)
  }

}
