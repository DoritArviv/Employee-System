import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {
 // uri for server requests
 uri = 'http://localhost:3000/employee';

  constructor(private http :HttpClient) { }

  deleteById(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
