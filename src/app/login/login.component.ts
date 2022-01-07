import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgSrc:string;

  // to display appropriate card
  cardActive:string;

  constructor(private router:Router) { 
    this.imgSrc=environment.imgLocation;
    const urlInfo=this.router.url;

    this.cardActive=urlInfo==='/login' ? 'signIn' : (urlInfo==='/signup' ? 'signUp' : 'forgotPass');
  }

  ngOnInit(): void {
  }

}
