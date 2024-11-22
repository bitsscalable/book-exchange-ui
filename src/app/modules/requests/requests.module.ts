import { NgModule } from '@angular/core';
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
import { MessagesRoutingModule } from '../messages/messages-routing.module';
import { BookRequestsComponent } from './book-requests/book-requests.component';
import { RequestedBooksComponent } from './requested-books/requested-books.component';
import { RequestsDashboardComponent } from './requests-dashboard/requests-dashboard.component';



@NgModule({
  declarations: [
    
    BookRequestsComponent,
    RequestedBooksComponent,
    RequestsDashboardComponent
  ],
  imports: [
    CommonModule,
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
  ]
})
export class RequestsModule { }
