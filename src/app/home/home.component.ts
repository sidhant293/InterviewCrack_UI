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
  profileMenuToogle:boolean;
  username:string="";

  constructor() { 
    this.burgerToogle=true;
    this.profileMenuToogle=true;
    this.imgSrc=environment.imgLocation;
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
    .then(res=> {
      this.loggedIn=true;
      const name=res.attributes.email;
      const indx=name.indexOf("@");
      this.username=name.slice(0,indx);
    })
    .catch(err=>this.loggedIn=false);
  }

  onSignOut(){
    Auth.signOut().then(res=> {
      console.log("signout successfull",res);
      this.loggedIn=false;
    }).catch(err=>console.log("signout error",err));
  }

}
