



import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Auth } from "src/app/auth";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService implements CanActivate {

constructor(private au:Auth,private router:Router){

}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> |boolean {

return this.au.isAuthenticated().then((data)=>{
    if(data){
        return true
    }else{
        this.router.navigate['/contacts']
    }
}

)



    }




}