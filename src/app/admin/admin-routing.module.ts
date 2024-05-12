import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {ItemsComponent} from "./components/items/items.component";
import {AdminComponent} from "./admin.component";
import {OdersComponent} from "./components/oders/oders.component";
import {CreateItemComponent} from "./components/items/create-item/create-item.component";
import {DetailItemComponent} from "./components/items/detail-item/detail-item.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {EmployeesComponent} from "./components/employees/employees.component";
import {CreateUserComponent} from "./components/users/create-user/create-user.component";
import {DetailUserComponent} from "./components/users/detail-user/detail-user.component";
import {DetailOderComponent} from "./components/oders/detail-oder/detail-oder.component";



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'oders', component: OdersComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'items/create_item', component: CreateItemComponent },
      { path: 'users/create_user', component: CreateUserComponent},
      { path: 'items/detail_item', component: DetailItemComponent },
      { path: 'users/detail_user', component: DetailUserComponent },
      { path: 'oders/detail_oder', component: DetailOderComponent },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
