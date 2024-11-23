import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsDashboardComponent } from './requests-dashboard/requests-dashboard.component';
import { ChatBoxComponent } from '../messages/chat-box/chat-box.component';

const routes: Routes = [
  { path: '', component: RequestsDashboardComponent , children:[
    { path: 'chatBoxx', component: ChatBoxComponent }
  ]},
  // { path: 'chatBoxx', component: ChatBoxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
