import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { BooksDashboardComponent } from './books-dashboard/books-dashboard.component';
import { ChatBoxComponent } from '../messages/chat-box/chat-box.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { PendingTransactionsComponent } from '../dashboard/pending-transactions/pending-transactions.component';

const routes: Routes = [
  { path: '', component: BooksDashboardComponent },
  { path: 'addBook', component: AddBooksComponent },
  { path: 'exchange', component: PendingTransactionsComponent },
  { path: 'searchBook', component: SearchBookComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
