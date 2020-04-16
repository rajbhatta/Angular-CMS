import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

import { HeaderComponent } from './cms/header/header.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './cms/footer/footer.component'; 
import { CKEditorModule } from 'ckeditor4-angular';

import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './cms/login/login.component';
import { SignupComponent } from './cms/user/signin/signup.component';
import { UserprofileComponent } from './cms/user/userprofile/userprofile.component';
import { PostarticleComponent } from './cms/user/postarticle/postarticle.component';
import { LeftnavComponent } from './cms/user/leftnav/leftnav.component';
import { HomeComponent } from './view/home/home.component';
import { DetailsComponent } from './view/home/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UserprofileComponent,
    PostarticleComponent,
    LeftnavComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    ChartsModule,
    CKEditorModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
