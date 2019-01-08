import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ParentComponent } from './parent/parent.component';
import { Service } from "src/service";
import {Routes,RouterModule} from "@angular/router"
import { CustomModule } from "src/app/custom/custom.module";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from "src/app/authService";
import { Auth } from "src/app/auth";

const appRoute:Routes =[
  {path:'',component:LoginComponent},
  // {path:'home',canActivate:[AuthService],component:HomeComponent },
  {path:'home',component:HomeComponent },

  //{path:'home/contacts',component:ContactComponent}
  { path: '', component: HomeComponent, children:[
  {path: 'contacts',component: ContactComponent},
  {path:'contacts/:id',component:ContactComponent}
  ]
  }

  ]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SiblingComponent,
    ParentComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    CustomModule,
    ReactiveFormsModule
  ],
  providers: [Service,AuthService,Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
