import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { Constants } from '../../shared/variables/constants';
import { io, Socket } from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../shared/variables/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private messagesSubject: Subject<any> = new Subject<any>();
socket: any;

  constructor(private _rest:HttpClient) {
     this.socket = io('http://3.94.192.80:5000', {
      transports: ['websocket'], // Ensure we're using WebSocket transportwithCredentials: true
          });
  }

 

  // Send a message through the WebSocket
  sendMessage(message: any): void {
    console.log('paylod',JSON.stringify(message))
    
    this.socket.emit('new_message',message)
  }

  

  join(username:String, peer:String):void{
    console.log('join', {
      username: username,
      peer: peer
                })
    this.socket.emit('join', {
      username: username,
      peer: peer
                });
  }

  // Observable to receive messages from the WebSocket
  getMessages(): Observable<any> {
    
    this.socket.on('chat_history', (data: any) => {
      console.log('Chat history received:', data);
      this.messagesSubject.next(data); // Push received data to the Subject
  });


    return this.messagesSubject.asObservable();
  }


  closeConnection(): void {
    this.socket.close();
  }

  getActiveChats(): Observable<any> {
    let user = sessionStorage.getItem('email')
    // let user = 'userA'
    return this._rest.get<any>('http://3.94.192.80:5000/api/messages/'+user+'/channels');
  }

}
