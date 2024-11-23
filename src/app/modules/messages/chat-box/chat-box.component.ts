import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent implements OnInit {
@Input() chat: any;

  username = sessionStorage.getItem('username');
  peer: string = 'userB';
  message: string = '';
  chatHistory: any[] = [];

  constructor(private socketService: RequestsService) { }

  ngOnInit(): void {
  
    this.socketService.join();

    this.socketService.getMessages().subscribe((data) => {
      console.log('Received message:', data);
      this.chatHistory.push(data);  
    });

    
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      console.log('Global Escape key pressed!');
      this.chat = null;
    }
  }

  sendMessage(): void {
    const message = {
      sender: this.username,
      recipient: this.peer,
      message: this.message,
      timestamp: new Date().toISOString(),
    };
    
    this.chatHistory[0].push(message); 

    let msg = {
      type: 'new_message',
      payload: message
    }
    this.socketService.sendMessage(message);
    this.message ='';
this.socketService.getMessages().subscribe((data) => {
  console.log('Received message:', data);
  this.chatHistory.push(data); 
});
  }

}
