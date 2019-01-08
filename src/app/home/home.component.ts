import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, FormBuilder, FormArray} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
form:FormGroup
mobile:FormArray
  constructor(private fb:FormBuilder) { }
  home = '/home';

  ngOnInit() {
    this.form = this.fb.group({
      username :['',[this.validatorForSpace,this.validatorForAlphabets]],
    
      mobile: new FormArray([this.fb.group({
        name: ''
      })])
    })
  }
  validatorForSpace(control:AbstractControl){

    if(!control.value.includes(' ')){
    return {check:true};
    }
    return null;
    }

validatorForAlphabets(control:AbstractControl){
  
  if(!( /^[a-zA-Z ]*$/.test(control.value))){
    return {check1:true};
    }
    return null;
}
validateForNumbers(control:AbstractControl){
  
  if(!( /^\d{10}$/.test(control.value))){
    return {check2:true};
    }
    return null;
}
add(){
  // const con =  new FormControl(null,this.validateForNumbers);
  // (<FormArray>this.form.get('mobile')).push(con)
  this.mobile =  this.form.get('mobile') as FormArray
  this.mobile.push(this.fb.group({
    name: ''
  }))
}


}
