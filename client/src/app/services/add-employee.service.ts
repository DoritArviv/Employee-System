import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {
  // uri for server requests
  uri = 'http://localhost:3000/employee';


  constructor(private http : HttpClient) { }

  addEmpService(Id, Name, Family,Email,Address){
    const myEmpObj = {
      empId : Id,
      empName : Name,
      empFamily : Family,
      empEmail : Email,
      empAddress: Address
    }
    this.http.post(`${this.uri}/add-employee`,myEmpObj).subscribe((res)=>{
      console.log('Employee added successfuly' + res);
    });

  }
}
