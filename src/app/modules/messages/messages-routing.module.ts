import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { MessagesDashboardComponent } from './messages-dashboard/messages-dashboard.component';

const routes: Routes = [
  { path: '', component: MessagesDashboardComponent },
  { path: 'chatBox', component: ChatBoxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
