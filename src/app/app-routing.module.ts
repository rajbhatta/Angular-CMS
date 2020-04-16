import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './cms/login/login.component'
import {BodyComponent} from './cms/body/body.component';
import {SignupComponent} from './cms/user/signin/signup.component';
import {UserprofileComponent} from './cms/user/userprofile/userprofile.component';
import {PostarticleComponent} from './cms/user/postarticle/postarticle.component';
import{HomeComponent} from './view/home/home.component';
import { DetailsComponent } from './view/home/details/details.component';

const routes: Routes = [
  {path:'user/login', component:LoginComponent},
  {path:'user/signin', component:SignupComponent},
  {path:'user/profile', component:UserprofileComponent},
  {path:'details', component:BodyComponent},
  {path:'user/post', component:PostarticleComponent},
  {path:'', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'tutorial', component:DetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
