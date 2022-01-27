import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import Amplify from 'aws-amplify';
import {cognito} from './aws-exports/cognito';
import { ReactiveFormsModule } from '@angular/forms';

Amplify.configure({
  Auth:{
    madatorySignId:true,
    region:cognito.REGION,
    userPoolId:cognito.USER_POOL_ID,
    userPoolWebClientId:cognito.APP_CLIENT_ID
  }
});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
