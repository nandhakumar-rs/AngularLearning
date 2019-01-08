import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Service{

public mes =  new Subject<String>()
constructor(){

}
setdata(data){
    this.mes.next(data)

}


}