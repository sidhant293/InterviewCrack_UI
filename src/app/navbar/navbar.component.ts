import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  burgerToogle:boolean;
  imgSrc:string;
  loggedIn:boolean=false;
  profileMenuToogle:boolean;
  username:string="";
  preloader:boolean;

  constructor() { 
    this.burgerToogle=true;
    this.profileMenuToogle=true;
    this.imgSrc=environment.imgLocation;
    this.preloader=false;
  }

  ngOnInit(): void {
    this.preloader=true;
    Auth.currentAuthenticatedUser()
    .then(res=> {
      this.loggedIn=true;
      const name=res.signInUserSession.idToken.payload.email;
      const indx=name.indexOf("@");
      this.username=name.slice(0,indx);
      console.log("HOME",res);      
    })
    .catch(err=>{
      this.loggedIn=false;
      console.log("HOME ERR",err);
    })
    .finally(()=>{
      console.log("HOME FINALLY ",this.loggedIn,this.username);
      this.preloader=false;
    });
  }

  onSignOut(){
    this.preloader=true;
    Auth.signOut().then(res=> {
      console.log("signout successfull",res);
      this.loggedIn=false;
    }).catch(err=>console.log("signout error",err))
    .finally(()=>this.preloader=false);
  }
}
