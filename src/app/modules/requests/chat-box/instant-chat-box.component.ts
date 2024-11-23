import { AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestsService } from '../../messages/requests.service';

@Component({
  selector: 'app-request-chat-box',
  templateUrl: './instant-chat-box.component.html',
  styleUrl: './instant-chat-box.component.css'
})
export class NewRequestChatBoxComponent implements OnInit, OnDestroy{
@Input() chat: any;

  
  message: string = '';
  chatHistory: any[] = [];
  username!:String|null;

  constructor(private socketService: RequestsService) { 
    
    
  }
  ngOnDestroy(): void {
    this.chat='';
    this.chatHistory = []
    this.socketService.closeConnection()
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('email');
    if(this.chat){
      if(this.username){
        this.socketService.join(this.username,this.chat);
      }
        
    
        this.socketService.getMessages().subscribe((data) => {
          console.log('Received message:', data);
          this.chatHistory.push(data);  
        });
    }

    
    
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
      recipient: this.chat,
      message: this.message,
      timestamp: new Date().toISOString(),
    };
    
    this.chatHistory.push(message); 

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
