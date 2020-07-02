import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowEmployeeService {
  uri = 'http://localhost:3000/employee'
  constructor(private http : HttpClient) { }

  showEmpLst(){
   return this.http.get(`${this.uri}`);
  }
}
