import { Component, OnInit } from '@angular/core';
import { Service } from "src/service";
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit{

  name: String;
  subs:Subscription;
  constructor(private ser:Service) {
   }

  ngOnInit() {
this.subs = this.ser.mes.subscribe((data)=>{
this.name = data
})

  }
 change(data){
   this.ser.setdata(data)
 }

}
