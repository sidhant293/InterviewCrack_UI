import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  burgerToogle:boolean;
  imgSrc:string;
  loggedIn:boolean=false;

  constructor() { 
    this.burgerToogle=true;
    this.imgSrc=environment.imgLocation;
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then(res=> this.loggedIn=true).catch(err=>this.loggedIn=false);
  }

  onSignOut(){
    Auth.signOut().then(res=> {
      console.log("signout successfull",res);
      this.loggedIn=false;
    }).catch(err=>console.log("signout error",err));
  }

}
