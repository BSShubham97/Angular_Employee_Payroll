import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ 
  {path:'',component:DashboardComponent},
  {path:'add',component:AddemployeeComponent},
  {path:'back', component:DashboardComponent}
]; //Routing paths are added here -> i.e the URLs that we enter for navigations

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
