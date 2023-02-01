import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-allempdetails',
  templateUrl: './allempdetails.component.html',
  styleUrls: ['./allempdetails.component.css']
})
export class AllempdetailsComponent implements OnInit {

  public employee:any={
    employeeId:'',
    employeeName:'',
    grade:'',
     dob:'',
    exprience:'',
    exprienceInRange:'',
    baseLocation:'',
    currentLocation:'',
    dateOfJoining:'',
    mobileNo:''
  }
  constructor( private empservice:EmployeeService,private router:Router) { }

  ngOnInit():  void {
    this.empservice.getallemployee().subscribe(
      (data)=>{
  
  this.employee=data;
  console.log(this.employee);
}

    )
  }
  addemp(){
    
    this.router.navigate(["/dashboard/addemp"]);

  }

}
