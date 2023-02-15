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
  email:'',
  mobileNo:'',
	dateOfJoining:'',
	exprience:'',
	baseLocation:'',
	currentLocation:'',
  primarySkills:'',
  secondarySkills:'',
  yashExperiene:'',
  totalExperience:''
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
  update(id:any){
    this.router.navigate(["/dashboard/addemp/"]);
    
  }

  delete(id:any){
    this.empservice.deleteEmpById(id).subscribe(
      (data:any)=>{
        window.location.reload();
      },
      (Error:any)=>{
  
      }
    )
    }


}
