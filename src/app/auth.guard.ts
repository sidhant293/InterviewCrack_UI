import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router } from '@angular/router';
import { Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate {

  constructor(private router:Router){}

 async canActivate(){
    return this.canVisitWebPage();
  }

 async canLoad() {
    return this.canVisitWebPage();
  }
  
  // custom function to check wheather user can visite webpage
  async canVisitWebPage(){
    let currentUser;

    try{
      currentUser=await Auth.currentAuthenticatedUser();
      console.log("currentUser",currentUser);
      return true;
    }catch(err){
      console.log("current user not found",err);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
