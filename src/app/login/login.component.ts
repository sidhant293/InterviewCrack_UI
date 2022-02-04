import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
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
  registerForm:FormGroup;
  forgotPasswordForm:FormGroup;
  verifyPasswordForm:FormGroup;

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

    this.registerForm=this.formBuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',[Validators.required,Validators.pattern(passwordValidator)]],
      confirmPassword:['',[Validators.required,Validators.pattern(passwordValidator)]]
    });

    this.forgotPasswordForm=this.formBuilder.group({
      email:['',Validators.required]
    });

    this.verifyPasswordForm=this.formBuilder.group({
      code:['',Validators.required],
      email:['',Validators.required],
      password:['',[Validators.required,Validators.pattern(passwordValidator)]],
      confirmPassword:['',[Validators.required,Validators.pattern(passwordValidator)]]
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
    .then(res=> {
      console.log("login success",res);
      this.router.navigate(['problemset']);
    })
    .catch(err=> this.error=err.message)
    .finally(()=>this.preloader=false);
  }

  onSignUp(){
    if(!this.registerForm.valid){
      if(this.registerForm.controls.username.errors) this.error='Username should not be empty';
      else if(this.registerForm.controls.email.errors) this.error='Email should not be empty';
      else if(this.registerForm.controls.password.errors) this.error='Should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      else if(this.registerForm.controls.confirmPassword.errors) this.error='Should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      return;
    }

    if(this.registerForm.value['password'] != this.registerForm.value['confirmPassword']){
      this.error='Password and Confirm Password should be same';
      return;
    }

    this.error='';
    this.preloader=true;

    Auth.signUp({
      username: this.registerForm.value['username'],
      password: this.registerForm.value['password'],
      attributes:{
        email:this.registerForm.value['email']
      }
    })
    .then(res=> {
      console.log("register success",res);
      this.cardActive='verify';
    })
    .catch(err=> this.error=err.message)
    .finally(()=>this.preloader=false);
  }

  onForgotPassword(){
    if(!this.forgotPasswordForm.valid){
      if(this.forgotPasswordForm.controls.email.errors) this.error='Email should not be empty';
      return;
    }

    this.error='';
    this.preloader=true;

    Auth.forgotPassword(this.forgotPasswordForm.value['email'])
    .then(res=>{
      console.log("code send",res);
      this.cardActive='passVerify';
    })
    .catch(err=> {
      console.log("error occured",err);
      this.error=err.message;
    })
    .finally(()=>this.preloader=false);
  }

  onVerifyPassword(){
    if(!this.verifyPasswordForm.valid){
      if(this.verifyPasswordForm.controls.code.errors) this.error='Verification code should not be empty';
      else if(this.verifyPasswordForm.controls.email.errors) this.error='Email or username should not be empty';
      else if(this.verifyPasswordForm.controls.password.errors) this.error='Should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      else if(this.verifyPasswordForm.controls.confirmPassword.errors) this.error='Should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      return;
    }

    if(this.verifyPasswordForm.value['password'] != this.verifyPasswordForm.value['confirmPassword']){
      this.error='Password and Confirm Password should be same';
      return;
    }

    this.error='';
    this.preloader=true;

    Auth.forgotPasswordSubmit(
      this.verifyPasswordForm.value['email'],
      this.verifyPasswordForm.value['code'],
      this.verifyPasswordForm.value['password']
      )
    .then(res=>{
      console.log("success verify password",res);
      this.cardActive='successVerify';
    })
    .catch(err=>{
      console.log("error in verify password",err);
      this.error=err.message;
    })
    .finally(()=>this.preloader=false)
  }

  async onSocialLogin(){
    try{
      const login=await Auth.federatedSignIn({provider:CognitoHostedUIIdentityProvider.Google});
      console.log("google success",login);
    }catch(err){
      console.log("google failed",err);
    }
  }

}
