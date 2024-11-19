import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportDashboardComponent } from './support-dashboard/support-dashboard.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ResolvedTicketsComponent } from './resolved-tickets/resolved-tickets.component';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MatTableModule } from '@angular/material/table';
import { MultiSelectModule } from 'primeng/multiselect';




@NgModule({
  declarations: [
    SupportDashboardComponent,
    NewTicketComponent,
    ResolvedTicketsComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    CardModule,
    TabViewModule,
    MatTableModule,
    MultiSelectModule
  ]
})
export class SupportModule { }
