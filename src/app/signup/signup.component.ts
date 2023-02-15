import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../model/employee';
import { RegistrationService } from '../service/registration.service';
import Validation from '../utils/validation';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  /*
  form: FormGroup;
  employee=new Employee();
  loading = false;
  submitted = false;

  public Registration:any={
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  }
 
  reg=new this.Registration();

  constructor(private regservice:RegistrationService, private formBuilder: FormBuilder,
    private router: Router){

  }
  ngOnInit(){
   


  this.form = this.formBuilder.group(
    {
     
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
  );
  }
  get f() {
    return this.form.controls;
  }
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
*/
registerForm!: FormGroup;
public Registration:any={
  username:'',
  email:'',
  password:'',
  confirmpassword:''
}
  loading = false;
  submitted = false;
  constructor( private formBuilder: FormBuilder,
    private router: Router,private regservice:RegistrationService){
  }
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  
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

