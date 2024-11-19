import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  constructor(private messageService: MessageService) {}

  showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'It worked' });
    }

    showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  showWarn(){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  
    
}
