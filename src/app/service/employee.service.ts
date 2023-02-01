import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public getallemployee(){
    return this.http.get(`http://localhost:7079/employee/getAllEmp`);
  }
  public addEmp(reg:any)
  {
    return this.http.post(`http://localhost:7079/employee/addEmp`,reg);
  }
}
