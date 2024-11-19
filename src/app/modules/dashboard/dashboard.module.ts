import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBooksOverviewComponent } from './add-books-overview/add-books-overview.component';
import { PendingTransactionsComponent } from './pending-transactions/pending-transactions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { GalleriaModule } from 'primeng/galleria';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { StepperModule } from 'primeng/stepper';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RequestBookOverviewComponent } from './request-book-overview/request-book-overview.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddBooksOverviewComponent,
    RequestBookOverviewComponent,
    PendingTransactionsComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    StepperModule,
    FormsModule,
   InputTextModule,
   MultiSelectModule,
   InputTextareaModule, 
   FloatLabelModule,
   RatingModule,
   SliderModule,
   InputOtpModule,
   FileUploadModule,
   RadioButtonModule,
    ButtonModule,
     BadgeModule, 
     ToastModule,
     DataViewModule,
     TagModule,
     DialogModule,
     GalleriaModule,
     MatTableModule,
     CarouselModule,
     TableModule,

     IconFieldModule, InputIconModule, DropdownModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[ConfirmationService,MessageService]
})
export class DashboardModule { }
