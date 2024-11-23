import { Component, HostListener, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';


export interface Chats {
  name: string;
  lastMessage: string;
  book:string;
  unread: boolean;
}

 

@Component({
  selector: 'app-messages-dashboard',
  templateUrl: './messages-dashboard.component.html',
  styleUrl: './messages-dashboard.component.css'
})
export class MessagesDashboardComponent implements OnInit{
  displayedColumns: string[] = ['name'];
  dataSource !: any;


  clickedRows = new Set<Chats>();
  chat : any;

  constructor(private _service : RequestsService){

  }

  rowClicked(row: Chats){
    this.clickedRows.clear();
    this.chat = row;
    // this.clickedRows.add(row);
    console.log('chat',row)
  }

  items!: string[];

    ngOnInit() {
      this.getActiveChats();
    }

    getActiveChats(){
      this._service.getActiveChats().subscribe((res: any)=>{
        console.log(res)
        this.dataSource = res;
      })
    }

    

    
}
