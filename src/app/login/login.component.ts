import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
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
  //loading gif
  preloader:boolean;
  //error message
  error:string;

  loginForm:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder) { 
    this.imgSrc=environment.imgLocation;
    const urlInfo=this.router.url;
    this.error='';
    this.preloader=false;

    this.cardActive=urlInfo==='/login' ? 'signIn' : (urlInfo==='/signup' ? 'signUp' : 'forgotPass');

    //password regex expression
    const passwordValidator='(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}';

    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.pattern(passwordValidator)]]
    })
  }

  ngOnInit(): void {
  }

   onSignIn(){
    if(!this.loginForm.valid){
      if(this.loginForm.controls.username.errors) this.error='Username or Email should not be empty';
      else if(this.loginForm.controls.password.errors) this.error='Should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      return;
    }

    this.error='';
    this.preloader=true;

    Auth.signIn({
      username: this.loginForm.value['username'],
      password: this.loginForm.value['password']
    })
    .then(res=> console.log("login success",res))
    .catch(err=> this.error=err.message)
    .finally(()=>this.preloader=false);
  }

}
