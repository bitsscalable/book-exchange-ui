import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert-component/alert.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { AlertServiceService } from './alert-service.service';


@NgModule({
  declarations: [
    AlertComponent
    
  ],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    ToastModule, ButtonModule
  ],
  exports:[AlertComponent],
  providers:[MessageService,MessageService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertModule { }
