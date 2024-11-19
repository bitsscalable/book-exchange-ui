import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { Notification, NotificationType } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  public subject = new Subject<Notification>();

  constructor(private messageService : MessageService) { }

  showNotification(type:NotificationType,title:string,contet:string){


    this.messageService.add({ severity: type, summary: title, detail: contet });
  }

  success(content:string){
    let summary = 'Success';
    this.showNotification(NotificationType.success,summary,content);
  }

  error(content:string){
    let summary = 'Error';
    this.showNotification(NotificationType.error,summary,content);
  }

  info(content:string){
    let summary = 'Info';
    this.showNotification(NotificationType.info,summary,content);
  }

  warn(content:string){
    let summary = 'Warning';
    this.showNotification(NotificationType.warn,summary,content);
  }



  // success(){
  //   // this.messageService.add()
  // }

  // success(alert={ severity: 'success', summary: 'Success', detail: 'Message Content' }){
  //   const alertItem = new Notification();
  //   alertItem.severity = NotificationType.success;
  //   alertItem.summary = 'Success';
  //   alertItem.detail = 'message ra';
  //   this.messageService.add(alertItem);
  //   this.subject.next(alertItem);
  // }

  // error(alert={ severity: 'error', summary: 'Success', detail: 'Message Content' }){
  //   const alertItem = new Notification();
  //   alertItem.severity = NotificationType.error;
  //   alertItem.summary = 'Error';
  //   this.messageService.add(alertItem);
  //   alertItem.detail = 'message ra';

  //   this.subject.next(alertItem);
  // }

}
