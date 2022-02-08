import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imgSrc:string;
  email:string="";
  username:string="";
  error:string="";
  successMessage:string="";
  // to active password change form fields
  changePasswordActive:boolean;
  preloader:boolean;

  passwordChangeForm:FormGroup;
  loggedInUser:any;

  constructor(private formBuilder:FormBuilder) {
    this.imgSrc=environment.imgLocation;
    this.changePasswordActive=false;
    this.preloader=false;
    //password regex expression
    const passwordValidator='(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{8,}';

    this.passwordChangeForm=this.formBuilder.group({
      oldPassword:['',[Validators.required,Validators.pattern(passwordValidator)]],
      password:['',[Validators.required,Validators.pattern(passwordValidator)]],
      confirmPassword:['',[Validators.required,Validators.pattern(passwordValidator)]]
    });
   }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
    .then(res=> {
      this.email=res.attributes.email;
      this.username=res.username;
      this.loggedInUser=res;
    })
    .catch(err=>this.error=err.message);
  }

  onPasswordChange(){
    if(!this.passwordChangeForm.valid){
      if(this.passwordChangeForm.controls.password.errors) this.error='New password should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      else if(this.passwordChangeForm.controls.confirmPassword.errors) this.error='Confirm password should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      else if(this.passwordChangeForm.controls.oldPassword.errors) this.error='Old password should contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character. Minimum length should be 8';
      return;
    }else if(this.passwordChangeForm.value['password']==this.passwordChangeForm.value['oldPassword']){
      this.error='Old and new password should not be same';
      return;
    }else if(this.passwordChangeForm.value['password'] != this.passwordChangeForm.value['confirmPassword']){
      this.error='Password and Confirm Password should be same';
      return;
    }

    this.error='';
    this.preloader=true;

    Auth.changePassword(
      this.loggedInUser,
      this.passwordChangeForm.value['oldPassword'],
      this.passwordChangeForm.value['password']
    )
    .then(res=>{
      this.successMessage=res;
      this.changePasswordActive=false;
    })
    .catch(err=>this.error=err.message)
    .finally(()=>this.preloader=false)
  }

}
