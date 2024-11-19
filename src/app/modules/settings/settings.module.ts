import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsDashboardComponent } from './settings-dashboard/settings-dashboard.component';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { Button } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SettingsDashboardComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CardModule,
    MultiSelectModule,
    Button,
    PasswordModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[MessageService]
})
export class SettingsModule { }
