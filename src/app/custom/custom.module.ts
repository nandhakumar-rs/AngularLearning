import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from "src/app/Directives/directive";
import { CustomPipe } from "src/app/CustomPipe";

@NgModule({
  declarations: [CustomDirective,CustomPipe],
  imports: [
    CommonModule
  ],
  exports:[
    CustomDirective,
    CustomPipe
  ]
})
export class CustomModule { }
