import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { AddTaskComponent } from './AddTask/AddTask.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,title:'Home'},
  {path:'Login',component:LoginComponent,title:'Login'},
  {path:'AddTask',component:AddTaskComponent,title:'AddTask'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
