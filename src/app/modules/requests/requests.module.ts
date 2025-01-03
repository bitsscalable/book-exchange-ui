import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PaginatorModule } from 'primeng/paginator';
import { StepperModule } from 'primeng/stepper';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { BookRequestsComponent } from './book-requests/book-requests.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { RequestsDashboardComponent } from './requests-dashboard/requests-dashboard.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { NewRequestChatBoxComponent } from './chat-box/instant-chat-box.component';



@NgModule({
  declarations: [
    
    BookRequestsComponent,
    RequestedBooksComponent,
    RequestsDashboardComponent,
    NewRequestChatBoxComponent
  ],
  imports: [
    CommonModule,
    // MessagesModule,
    CardModule,
    ButtonModule,
    RequestsRoutingModule,
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
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestsModule { }
