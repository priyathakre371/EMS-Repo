import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public employee:any=
  {
 employeeId:'',  
 employeeName:''
  }

  constructor(private employeeService:EmployeeService,private _router:Router) { }

  msg="";
  ngOnInit(): void {
   /* this.employeeService.getByIdAndName
    (this.employee.employeeId,this.employee.employeeName).subscribe(k=>{
      console.log(k);
      console.log(this.employee.employeeName);
      this.employee=k;
      this._router.navigateByUrl("/dashboard/evaluationform");
    }
    )*/
    
  }
  startEval(employeeId:number,employeeName:string)
  {
    
    this.employeeService.getByIdAndName
    (this.employee.employeeId,this.employee.employeeName).subscribe(k=>{
      console.log(k);
      console.log(this.employee.employeeName);
      this.employee=k;
      //this._router.navigateByUrl("/dashboard/evaluationform");
      this._router.navigate(['/dashboard/evaluationform/',
      employeeId,employeeName]);
      
      // if(k!="")
      // {
      //   Swal.fire("Login sucessfully","welcome","success");
      //   this._router.navigateByUrl("/dashboard/evaluationform");
      // }
      // else{
      //   Swal.fire("Sorry");
      // }
    })
  
  
  }

}
