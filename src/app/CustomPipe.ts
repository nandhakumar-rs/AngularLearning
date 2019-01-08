import {Pipe} from '@angular/core';
import { PipeTransform } from "@angular/core";

@Pipe({
    name:'BoldAndCaps'
})
export class CustomPipe implements PipeTransform{
    transform(value: string ):string {
             return `${value.charAt(0).toUpperCase().bold()}${value.slice(1,).toLowerCase()}`;

        
              
    }

}