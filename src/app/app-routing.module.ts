import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddempComponent } from './addemp/addemp.component';
import { AddempformComponent } from './addempform/addempform.component';
import { AllempdetailsComponent } from './allempdetails/allempdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';

import { SignupComponent } from './signup/signup.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent,
  children:[
    {path:"feedback",component:FeedbackComponent},
    {path:"evolution",component:EvolutionComponent},
    {path:"allempdetails",component:AllempdetailsComponent},
    {path:"addemp",component:AddempComponent}
    
  ]
  },
  {path:"allempdetails",component:AllempdetailsComponent,
children:[
  {path:"addemp",component:AddempComponent},
  {path:"skills",component:SkillsComponent},
  {path:"project",component:ProjectComponent}
]
  },
  {path:"addempform",component:AddempformComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"addemp",component:AddempComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
