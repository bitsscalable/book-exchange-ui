import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    TopNavComponent,
    LoadingComponent 
   ],
  imports: [
    CommonModule,
    MenubarModule,

      MatSidenavModule,
      MatListModule,
    SidebarModule,ButtonModule, RippleModule, AvatarModule, StyleClassModule,ListboxModule,FormsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
