import { AfterViewInit, Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RequestsService } from '../requests.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent implements OnInit , OnChanges, OnDestroy{
@Input() chat: any;

  
  message: string = '';
  chatHistory: any[] = [];
  username!:String|null;

  constructor(private socketService: RequestsService) { 
    
    
  }
  ngOnDestroy(): void {
    console.log('chat box destroyed')
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chat']) {
      console.log('Value changed:', changes['chat'].currentValue);
      this.updateChats();
    }
  }

  ngOnInit(): void {
    
    this.updateChats()
  }

  updateChats(){
    this.username = sessionStorage.getItem('email');
    this.message = '';
  this.chatHistory = [];
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
