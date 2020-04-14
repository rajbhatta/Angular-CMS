import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './cms/login/login.component'
import {BodyComponent} from './cms/body/body.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'details', component:BodyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
