import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Endpoints } from '../../../shared/variables/endpoints';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {
  @Input() chat !: any;
  userMessage!:string;
  chatMessages: { content: string, type: string }[] = [];
  test !:any;
  constructor(private _rest:HttpClient){}
  

    sendMessage() {
      console.log(this.userMessage)
      if (this.userMessage.trim()) {
        // Add the user message to the chat
        this.chatMessages.push({ content: this.userMessage, type: 'outgoing' });
        const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set the correct content-type
    
        const body = {
          message: this.userMessage
        };
        // Send the message to the Spring Boot backend
        this.sendMessageServ(this.userMessage).subscribe(response=>{
          this.test = response.json;
          let res = response.json;
          this.chatMessages.push({ content: response.response, type: 'incoming' });
          this.userMessage = '';  
        })
        
      }
    }

    sendMessageServ(message: string): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      
      const body = {
        message: message
      };
  
      return this._rest.post<Response>(Endpoints.POST.SEND_MSG, body, { headers });
    }
  
  
}
