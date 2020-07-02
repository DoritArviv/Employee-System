import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditUpdateEmployeeService {
// uri for server requests
uri = 'http://localhost:3000/employee';

constructor(private http : HttpClient) { }

getEmpById(id){
  return this.http.get(`${this.uri}/get/${id}`);
}

updateById(id ,empId, empName, empFamily, empEmail,empAddress){
  const empObj ={
    empId : empId,
    empName : empName,
    empFamily : empFamily,
    empEmail :empEmail,
    empAddress : empAddress
  }
  this.http.post(`${this.uri}/update/${id}`,empObj)
  .subscribe(res=> {
    console.log('Employee update successfuly!' + res);
    });
  }
}