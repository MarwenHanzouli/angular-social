import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import * as countries from '../phone-prefix.json';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  userForm:FormGroup;
  countries:any[]=[];
  selectedValue:any;
  constructor(private formBuilder:FormBuilder) { }

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
      repassword:['',[Validators.required,Validators.minLength(3)]]
    });
  }
  get form (){
    return this.userForm.controls;
  }

  clicker(){

  }
}
