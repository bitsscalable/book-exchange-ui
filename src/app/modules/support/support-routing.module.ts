import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportDashboardComponent } from './support-dashboard/support-dashboard.component';

const routes: Routes = [
  {path:'', component:SupportDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
