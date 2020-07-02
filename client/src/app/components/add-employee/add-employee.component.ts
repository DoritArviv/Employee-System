import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AddEmployeeService} from '../../services/add-employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  frmAddEmploy : FormGroup;

  constructor(
    private fb : FormBuilder,
    private addEmployeeServie: AddEmployeeService,
    private route :Router) { 
    this.creatFrm();
  }

  ngOnInit(): void {
  }

  creatFrm(){
    this.frmAddEmploy= this.fb.group({
      empId : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      empName : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      empFamily : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      empEmail :  ['', Validators.required],
      empAddress : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });
  }


  addemployent(empId, empName, empFamily,empEmail,empAddress){
    this.route.navigate(['Employee']);
   return this.addEmployeeServie.addEmpService(empId, empName, empFamily,empEmail,empAddress);
  }

}
