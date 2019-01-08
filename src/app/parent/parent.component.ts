import { Component, OnInit } from '@angular/core';
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Service } from "src/service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    username:String;
  constructor(private ser:Service) {
     this.ser.setdata(this.username)
   }

  ngOnInit() {
       

  }

 changeData(data){
this.username = data;
 }

}
