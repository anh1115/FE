import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './components/users/users.component';
import { ItemsComponent } from './components/items/items.component';
import {RouterModule} from "@angular/router";
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { OdersComponent } from './components/oders/oders.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DetailItemComponent } from './components/items/detail-item/detail-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';
import { DetailOderComponent } from './components/oders/detail-oder/detail-oder.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    UsersComponent,
    ItemsComponent,
    SidebarMenuComponent,
    OdersComponent,
    EmployeesComponent,
    CommentsComponent,
    DetailItemComponent,
    CreateUserComponent,
    DetailUserComponent,
    DetailOderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
