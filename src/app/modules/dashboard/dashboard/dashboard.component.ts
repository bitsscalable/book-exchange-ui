import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  username!:string;
  borrowedBooksCount!:number;
  addedBooksCount!:number;
  constructor(private _service : DashboardServiceService){

  }

  ngOnInit(): void {
    this._service.getBookCounts().subscribe(res=>{
      console.log(res);
      this.addedBooksCount = res[0];
      this.borrowedBooksCount = res[1];
    })
  }

}
