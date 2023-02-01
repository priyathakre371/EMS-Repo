import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../model/employee';

import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private registrationservice:RegistrationService,private _router:Router){}

  public Registration:any={
    username:'',
    email: '',
    password: '',
    confirmpassword:''
  }

  employee=new Employee();

  msg="";
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
loginEms(){
  // if(this.employee.username=="ems" )
  //   {
  //     console.log("OK");
  //     //alert("Loging successfully..!!!")
  //     Swal.fire("Login sucessfully","welcome","success");
  //     this._router.navigateByUrl("/dashboard");
  //   }
  //   else{
  //     //alert("Sorry")
  //     Swal.fire("Sorry")
  //   }
  this.registrationservice.logincred(this.employee).subscribe(k=>{
    console.log(k);
    if(k!="Not login"){
      Swal.fire("Login sucessfully","welcome","success");
      this._router.navigateByUrl("/dashboard");
    }
    else{
      Swal.fire("Sorry");
    }
  })

}


}
