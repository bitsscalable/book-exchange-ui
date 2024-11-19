import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './modules/login/login-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import  {MatToolbarModule} from '@angular/material/toolbar';
import  {MatMenuModule} from '@angular/material/menu';
import  {MatIconModule} from '@angular/material/icon';
import  {MatButtonModule} from '@angular/material/button';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BooksModule } from './modules/books/books.module';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/LoadingInterceptor';
import { JwtInterceptor } from './shared/interceptors/JwtInterceptor';




@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    BrowserAnimationsModule,
     RippleModule, AvatarModule, StyleClassModule,
     MatSidenavModule,
     MatListModule,
     MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatButtonModule,
     MatInputModule,
     MatAutocompleteModule,
     BooksModule
    ],
  providers: [MessageService, provideAnimationsAsync(),ConfirmationService, 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
