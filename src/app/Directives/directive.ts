import {Directive} from '@angular/core'
import { OnInit } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Renderer2 } from "@angular/core";


@Directive({
    selector:'[customDir]'
})
export class CustomDirective implements OnInit{
    constructor(private elref:ElementRef,private render:Renderer2){

    }
    
    ngOnInit(): void {

        this.render.setStyle(this.elref.nativeElement,'font-weight','bold')

    }





}