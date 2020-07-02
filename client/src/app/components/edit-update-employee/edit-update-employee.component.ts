import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {EditUpdateEmployeeService} from '../../services/edit-update-employee.service';
import {ShowEmployeeService} from '../../services/show-employee.service';
import {Employee} from '../../model/employee';




@Component({
  selector: 'app-edit-update-employee',
  templateUrl: './edit-update-employee.component.html',
  styleUrls: ['./edit-update-employee.component.css']
})
export class EditUpdateEmployeeComponent implements OnInit {
  frmEditEmploy : FormGroup;
  lstEmployees : Employee[];
  empObj :any = {};
  constructor(
            private route : ActivatedRoute,
            private router :Router,
            private fb: FormBuilder,
            private showEmpService :ShowEmployeeService,
            private updateService :EditUpdateEmployeeService
            ){ 
            this.creatFrm();
          }
          creatFrm(){
            this.frmEditEmploy= this.fb.group({
              empId : ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
              empName : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
              empFamily : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
              empEmail : ['', Validators.required],
              empAddress : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
            });
          }
  ngOnInit(): void {
    this.route.params.subscribe((mparams)=>{
      this.updateService.getEmpById(mparams['id']).subscribe((res)=>{
        console.log(res);
        this.empObj= res;
      });
    });
    //get the info before chenching 
    this.getById(this.route.snapshot.params['id']);
  }
  
  updateEmp(empId, empName, empFamily,empEmail,empAddress){
    this.route.params.subscribe((param)=>{
      this.updateService.updateById(param['id'],empId, empName, empFamily,empEmail,empAddress); //take the id from the route
      //show full list 
      this.showEmpService.showEmpLst().subscribe((data : Employee[])=>{
        this.lstEmployees = data;
        this.router.navigate(['Employee']);
      });
    });

  }

  getById(id){
    this.updateService.getEmpById(id).subscribe((data)=>{
      this.empObj=data;
      this.frmEditEmploy.setValue({
        empId : this.empObj.empId,
        empName : this.empObj.empName,
        empFamily : this.empObj.empFamily,
        empEmail : this.empObj.empEmail,
        empAddress : this.empObj.empAddress
      });
    });
  }

}
