import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee'
import {ShowEmployeeService} from '../../services/show-employee.service';
import {DeleteEmployeeService} from '../../services/delete-employee.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  lstEmp : Employee[];
 
  constructor(
    private showEmpService :ShowEmployeeService,
    private deleteEmpService : DeleteEmployeeService,
    ) { }

  ngOnInit(): void {
    this.showEmpService.showEmpLst().subscribe((data :Employee[])=>{
      this.lstEmp =data;
    });
  }
  deleteEmp(id){
    this.deleteEmpService.deleteById(id).subscribe(data =>{
      this.showEmpService.showEmpLst().subscribe((data :Employee[])=>{
        this.lstEmp = data;
      });
      console.log('deleted Employee!');
    });
  }


  
  

}
