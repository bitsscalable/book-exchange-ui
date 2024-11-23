import { Component } from '@angular/core';


@Component({
  selector: 'app-requests-dashboard',
  templateUrl: './requests-dashboard.component.html',
  styleUrl: './requests-dashboard.component.css'
})
export class RequestsDashboardComponent {
  


  

  tabChange(tab:Number){
    console.log(tab)
  }
}
