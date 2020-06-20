import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import * as countries from '../phone-prefix.json';
import { MustMatch } from '../../helpers/validators';
import { AuthenticationService } from 'src/app/services/authentication.service.js';
import { User } from 'src/app/models/user.js';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  userForm:FormGroup;
  countries:any[]=[];
  hide = true;
  submitted:boolean=false;
  loading:boolean;
  constructor(private formBuilder:FormBuilder,
              private authService:AuthenticationService) { }

  ngOnInit() {
    this.countries=countries.countries;
    this.initForm();
  }
  initForm(){
    this.userForm=this.formBuilder.group({
      nomPrenom:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      telephone:['',[Validators.required,Validators.pattern(/[0-9]+/i)]],
      password:['',[Validators.required,Validators.minLength(3)]],
      repassword:['',[Validators.required]]
    },
    {
      validator: MustMatch('password','repassword')
    });
  }
  get form (){
    return this.userForm.controls;
  }

  signup(provider:string){
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
  submit(){
    if(this.userForm.invalid){
      return;
    }
    this.loading=true;
    let user:User=new User(this.userForm.value['nomPrenom'],this.userForm.value['email'],
    this.userForm.value['password'],this.userForm.value['telephone']);
    this.authService.registerUser(user).subscribe((data)=>{
      console.log(data);
      this.loading=false;
    },
    (err)=>{
      console.log(err);
      this.loading=false;
    })
  }
}
