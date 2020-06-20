import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private authService:AuthenticationService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(3)]]
    });
  }
  get form (){
    return this.userForm.controls;
  }
  login(provider:string){
    switch (provider) {
      case 'google':
        return this.authService.connectWithGoogle(); 
      case 'facebook':
        return this.authService.connectWithFacebook(); 
      case 'github':
        return this.authService.connectWithGithub();    
      default:
        break;
    }
  }
}
