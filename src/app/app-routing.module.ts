import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard';

const routes: Routes = [
    {
      path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [authGuard]
    },
      {
        path: 'books', loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule),
        canActivate: [authGuard]
      },
      {
        path: 'requests', loadChildren: () => import('./modules/requests/requests.module').then(m => m.RequestsModule),
        canActivate: [authGuard]
      },
      {
        path: 'messages', loadChildren: () => import('./modules/messages/messages.module').then(m => m.MessagesModule),
        // canActivate: [authGuard]
      },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
