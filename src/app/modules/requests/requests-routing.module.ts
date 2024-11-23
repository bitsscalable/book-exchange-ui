import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsDashboardComponent } from './requests-dashboard/requests-dashboard.component';

const routes: Routes = [
  { path: '', component: RequestsDashboardComponent },
  // { path: 'chatBox', component: ChatBoxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
