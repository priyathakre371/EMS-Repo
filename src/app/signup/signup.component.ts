import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../model/employee';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  registerForm!: FormGroup;
  employee=new Employee();
  loading = false;
  submitted = false;

  public Registration:any={
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  }

  constructor(private regservice:RegistrationService, private formBuilder: FormBuilder,
    private router: Router){

  }
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
    
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }
 onSubmit(){
  this.submitted = true;
  this.loading=true;
  Swal.fire("Register sucessfully","welcome","success");
  this.router.navigateByUrl("/login");
}
register()
{
  console.log(this.Registration);

  this.regservice.addregistration(this.Registration).subscribe(
    
    (data:any)=>{

      this.submitted = true;
  this.loading=true;
      
      alert("Data inserted");
      Swal.fire("Register sucessfully","welcome","success");
  this.router.navigateByUrl("/login");
     
    },
    (Error:any)=>{
      this.router.navigateByUrl("/login");
    }

  )
}
}
