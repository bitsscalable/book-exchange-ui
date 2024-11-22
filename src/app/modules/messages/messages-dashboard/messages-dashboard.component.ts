import { Component, OnInit } from '@angular/core';


export interface Chats {
  name: string;
  lastMessage: string;
  book:string;
  unread: boolean;
}

const chats: Chats[] =  [
  { name: 'Chat A', lastMessage: 'Hello there!',book:'abc', unread: true },
  { name: 'Chat B', lastMessage: 'How are you?',book:'abc', unread: false },
  { name: 'Chat C', lastMessage: 'Are you coming?',book:'abc', unread: true },
  { name: 'Chat A', lastMessage: 'Hello there!',book:'abc', unread: true },
  { name: 'Chat B', lastMessage: 'How are you?',book:'abc', unread: false },
  { name: 'Chat C', lastMessage: 'Are you coming?',book:'abc', unread: true },
  { name: 'Chat A', lastMessage: 'Hello there!',book:'abc', unread: true },
  { name: 'Chat B', lastMessage: 'How are you?',book:'abc', unread: false },
  { name: 'Chat C', lastMessage: 'Are you coming?',book:'abc', unread: true },
  { name: 'Chat A', lastMessage: 'Hello there!',book:'abc', unread: true },
  { name: 'Chat B', lastMessage: 'How are you?',book:'abc', unread: false },
  { name: 'Chat C', lastMessage: 'Are you coming?',book:'abc', unread: true },
  { name: 'Chat D', lastMessage: 'Let me know when you get this',book:'abc', unread: false }
];

@Component({
  selector: 'app-messages-dashboard',
  templateUrl: './messages-dashboard.component.html',
  styleUrl: './messages-dashboard.component.css'
})
export class MessagesDashboardComponent implements OnInit{
  displayedColumns: string[] = ['name'];
  dataSource = chats;

  clickedRows = new Set<Chats>();
  chat : any;

  rowClicked(row: Chats){
    this.clickedRows.clear();
    this.chat = row;
    this.clickedRows.add(row);
  }

  items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    }
}
