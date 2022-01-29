import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate {

  constructor(private router:Router){}

  canActivate(){
    this.router.navigate(['/login']);
    return false;
  }

  canLoad() {
    this.router.navigate(['/login']);
    return false;
  }
  
}
