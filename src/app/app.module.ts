import { NgModule } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddempformComponent } from './addempform/addempform.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllempdetailsComponent } from './allempdetails/allempdetails.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { AddempComponent } from './addemp/addemp.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { EvaluationformComponent } from './evaluationform/evaluationform.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EvaluationlistComponent } from './evaluationlist/evaluationlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    DemoComponent,
 
    DashboardComponent,
    AddempformComponent,
    ContactusComponent,
    AboutusComponent,
    AllempdetailsComponent,
    FeedbackComponent,
  
    AddempComponent,
    SkillsComponent,
    ProjectComponent,
    EvaluationformComponent,
    EvaluationComponent,
    EvaluationlistComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatIconModule,
     MatCardModule,
     MatListModule,
  ReactiveFormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
