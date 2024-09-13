import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

const routes: Routes = [  {
  path: '',
  component: DashboardComponent,
  children: [
    { path: 'userDashboard', component: UserdashboardComponent}
  ]
  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
