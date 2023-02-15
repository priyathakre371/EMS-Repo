import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
   public employee:any=
   {
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
  constructor(private _router:Router,private empservice:EmployeeService) { }

  ngOnInit(): void {
   
  }
  add(){
    this.empservice.addEmp(this.employee).subscribe(j=>{
      console.log(j);
      if(j!=null){
        Swal.fire("Add Employee sucessfully","welcome","success");
        this._router.navigateByUrl("/dashboard/allempdetails");
      }
      else{
        Swal.fire("Sorry");
        this._router.navigateByUrl("/dashboard/addemp");
      }

    })
  }
}
