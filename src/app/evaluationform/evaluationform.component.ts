import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from '../model/evaluation';
import { Skills } from '../model/skills';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-evaluationform',
  templateUrl: './evaluationform.component.html',
  styleUrls: ['./evaluationform.component.css']
})
export class EvaluationformComponent implements OnInit {

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
  totalExperience:'',
  evalList:Evaluation
}
skill=new Skills();

evaluation=new Evaluation();

eId:number;
eName:string;

  constructor(private _router:Router,private route : ActivatedRoute,private empservice:EmployeeService) { }

  ngOnInit(): void {
    this.eId= this.route.snapshot.params['employeeId'];
    this.eName= this.route.snapshot.params['employeeName'];
    console.log(this.eId,this.eName);
    this.empservice.getByIdAndName(this.eId,this.eName).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    }, error => console.log(error));
  }
/*
  ngOnInit() {
  
    this.evalForm();
   
  }
  */
  eval()
  {
    
     /* this.empservice.getByIdAndName(this.eId,this.eName).subscribe( data =>{
        console.log(data);
       // this.candidate=data;
        this.goToCustomerList();
      }
      , error => console.log(error));
    }*/

    this.empservice.addEval(this.eId, this.evaluation).subscribe( data =>{
      console.log(data);
      this.goToEvaluationList();
      }
      , error => console.log(error));
      }
    
    
  
/*
  evalForm()
  {
   var id= this.employee.employeeId
   var name=this.employee.employeeName
    this.empservice.getByIdAndName
    (101,'Priya').subscribe(k=>{
      var id=this.employee.employeeId;
      var name=this.employee.employeeName;
      console.log("ngonint",id);
      console.log("name=",this.employee.employeeName);
      console.log(k);
      console.log(this.employee.employeeName);
      this.employee=k;
       this._router.navigate(['/dashboard/evaluationform/',id,name]);
      //this._router.navigateByUrl("/dashboard/evaluationform/",employeeId,employeeName);
    })}
*/
    addEval()
    {

  
    }
    editEval()
    {
      this.eId= this.route.snapshot.params['employeeId'];

      this.empservice.addEval(this.eId, this.evaluation).subscribe( data =>{
        console.log(data);
        this.goToEvaluationList();
        }
        , error => console.log(error));
        }
      
    goToEvaluationList(){
    this._router.navigate(['/dashboard/evaluationlist']);
    }
    deleteEval()
    {

    }
  }


