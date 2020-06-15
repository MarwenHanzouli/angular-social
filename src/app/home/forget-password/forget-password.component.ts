import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
    });
  }
  get form (){
    return this.userForm.controls;
  }

}
