import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmptyError, Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Evaluation } from '../model/evaluation';

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
  public getEmpById(id:any){
    return this.http.get(`http://localhost:7079/employee/getEmpById/${id}`);
    }
    public deleteEmpById(id:any){
      return this.http.delete(`http://localhost:7079/employee/deleteEmpById/${id}`);
      }

      public updateEmpById(reg:any){

        return this.http.put(`http://localhost:7079/employee/updateEmpById`,reg);
      }
      public getByIdAndName(employeeId:number,employeeName:string):Observable<any>
      {
        return this.http.get("http://localhost:7079/employee/getByIdAndName/"+employeeId+"/"+employeeName+"/evaluation");
      }
      public addEval(employeeId:number,evaluation:Evaluation):Observable<Evaluation>
      {
        return this.http.put<Evaluation>("http://localhost:7079/employee/addEval/"+employeeId,evaluation);
        }
    
      
}
