import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    DashboardComponent,
    UserdashboardComponent
  ],
  imports: [
    CommonModule,MatMenuModule,MatListModule,MatButtonModule,MatIconModule,MatCardModule,
    AdminRoutingModule,MatToolbarModule,MatSidenavModule
  ]
})
export class AdminModule { }
