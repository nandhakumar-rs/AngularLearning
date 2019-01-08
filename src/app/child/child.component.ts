import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { OnChanges } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Service } from "src/service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.ser.mes.subscribe(data=>{
      this.name = data
  
    })
  }

  child = "cHild"
  @Input() name: String; 
  @Output() emitBind = new EventEmitter<String>()
  
   constructor(private ser:Service) { }
emitter(data){
  this.name = data;
this.emitBind.emit(this.name)
this.ser.setdata(this.name)

}
  
 

}
