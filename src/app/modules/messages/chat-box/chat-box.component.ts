import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent implements OnInit {
  username: string = 'userA';
  peer: string = 'userB';
  message: string = '';
  chatHistory: any[] = [];

  constructor(private socketService: RequestsService) { }

  ngOnInit(): void {
    const message =   {'username': 'userA', 'peer': 'userB'};  

    this.chatHistory.push(this.message); 

    // Send the message to the server via WebSocket
    this.socketService.join();


    // Listen to incoming messages
    this.socketService.getMessages().subscribe((data) => {
      console.log('Received message:', data);
      this.chatHistory.push(data);  // Add received message to chat history
    });
  }

  // Function to send a new message
  sendMessage(): void {
    const message = {
      sender: this.username,
      recipient: this.peer,
      message: this.message,
      timestamp: new Date().toISOString(),
    };
    this.chatHistory.push(this.message); 
// Listen to incoming messages
this.socketService.getMessages().subscribe((data) => {
  console.log('Received message:', data);
  this.chatHistory.push(data);  // Add received message to chat history
});
    // Send the message to the server via WebSocket
    let msg = {
      type: 'new_message',
      payload: message
    }
    this.socketService.sendMessage(msg);
    

    // this.message = ''; // Clear input after sending the message
  }
  // @Input() chat !: any;
  // userMessage!:string;
  // chatMessages: { content: string, type: string }[] = [];
  // test !:any;
  // constructor(private _rest:HttpClient,private webSocketService: RequestsService){}
  

   
  //   public messages: { content: string; isSelf: boolean }[] = [];
  // public message: string = '';

  // private socketUrl = Constants.WEB_SOCKET_URL; 


  // ngOnInit(): void {
  //   this.webSocketService.connect();

  //   this.webSocketService.getMessages().subscribe((msg) => {
  //     this.messages.push({ content: msg, isSelf: false });
  //   });
  // }

  // sendMessage(): void {
  //   if (this.message.trim()) {
  //     this.messages.push({ content: this.message, isSelf: true });
  //     this.webSocketService.sendMessage(this.message);
  //     this.message = '';
  //   }
  // }

  // ngOnDestroy(): void {
  //   this.webSocketService.close();
  // }
  
  

}

// prev code
// sendMessage() {
//   console.log(this.userMessage)
//   if (this.userMessage.trim()) {
//     // Add the user message to the chat
//     this.chatMessages.push({ content: this.userMessage, type: 'outgoing' });
//     const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set the correct content-type

//     const body = {
//       message: this.userMessage
//     };
//     // Send the message to the Spring Boot backend
//     this.sendMessageServ(this.userMessage).subscribe(response=>{
//       this.test = response.json;
//       let res = response.json;
//       this.chatMessages.push({ content: response.response, type: 'incoming' });
//       this.userMessage = '';  
//     })
    
//   }
// }

// sendMessageServ(message: string): Observable<any> {
//   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
//   const body = {
//     message: message
//   };

//   return this._rest.post<Response>(Endpoints.POST.SEND_MSG, body, { headers });
// }
