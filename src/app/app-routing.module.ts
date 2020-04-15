import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './cms/login/login.component'
import {BodyComponent} from './cms/body/body.component';
import {SignupComponent} from './cms/user/signin/signup.component';
import {UserprofileComponent} from './cms/user/userprofile/userprofile.component';

const routes: Routes = [
  {path:'user/login', component:LoginComponent},
  {path:'user/signin', component:SignupComponent},
  {path:'user/profile', component:UserprofileComponent},
  {path:'details', component:BodyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
