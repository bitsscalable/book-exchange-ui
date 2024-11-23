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
    // this.socket = new WebSocket('ws://http://3.94.192.80:5000'); // Replace with your server URL
    // this.socket.onmessage = this.handleMessage.bind(this);
    // this.socket.onopen = this.handleOpen.bind(this);
    // this.socket.onerror = this.handleError.bind(this);
    // this.socket.onclose = this.handleClose.bind(this);
  }

  private handleMessage(event: MessageEvent) {
    const data = JSON.parse(event.data);
    this.messagesSubject.next(data);  // Push data to observers
  }

  private handleOpen() {
    console.log('Connected to WebSocket server');
  }

  private handleError(error: Event) {
    console.error('WebSocket error:', error);
  }

  private handleClose(event: CloseEvent) {
    console.log('WebSocket closed:', event);
  }

  // Send a message through the WebSocket
  sendMessage(message: any): void {
    console.log('paylod',JSON.stringify(message))
    
    this.socket.emit('new_message',message)
    // this.socket.send(JSON.stringify(message));
  }

  

  join():void{
    this.socket.emit('join', {
      username: 'userA',
      peer: 'userB'
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
    return this._rest.get<any>('http://3.94.192.80:5000/api/messages/userA/channels');
  }

}
