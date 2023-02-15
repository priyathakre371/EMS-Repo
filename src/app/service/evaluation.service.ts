import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http:HttpClient) { }

  public getAllEval(){
    return this.http.get(`http://localhost:7079/evaluation/getAllEval`);
  }
  public addEval(reg:any)
  {
    return this.http.post(`http://localhost:7079/evaluation/addEval`,reg);
  }
}
