import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
    dashboardImage="https://media.licdn.com/dms/image/C4E12AQG20x_RUug-OQ/article-cover_image-shrink_600_2000/0/1580761409416?e=2147483647&v=beta&t=d84ttWnhIgd5UvMERAaHNEpoUg3RGBzvEd9Lr10tSQk";
   sidenavList=["Employee Details","FeedBack","Report","Employee Evalaution"];
   ngOnInit() {
    
   }
 
 
 
}
