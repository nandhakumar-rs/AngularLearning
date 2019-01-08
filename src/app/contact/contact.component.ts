import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
hello = 1
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
Observable.create()
   this.hello=  this.route.snapshot.params['id']
  }
  goToHome(){ 
    this.router.navigate(['/home'])
  }

}
