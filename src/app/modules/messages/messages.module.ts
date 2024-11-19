import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesDashboardComponent } from './messages-dashboard/messages-dashboard.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import {MatTableModule} from '@angular/material/table';
import { TabViewModule } from 'primeng/tabview';
import { BookRequestsComponent } from './book-requests/book-requests.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [
    MessagesDashboardComponent,
    ChatBoxComponent,
    BookRequestsComponent,
    RequestedBooksComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    CardModule,
    ButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    StepperModule,
    MatTableModule,
    FormsModule,
    TabViewModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,

    BadgeModule, 
    DataViewModule,
    TagModule,
    DialogModule,
    GalleriaModule,
    CarouselModule,
    PaginatorModule,
    CalendarModule,
    IconFieldModule, InputIconModule, DropdownModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[ConfirmationService,MessageService]
})
export class MessagesModule { }
