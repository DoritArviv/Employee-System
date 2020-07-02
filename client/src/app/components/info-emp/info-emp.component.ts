import { Component, OnInit, Inject } from '@angular/core';
import {EditUpdateEmployeeService} from '../../services/edit-update-employee.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-info-emp',
  templateUrl: './info-emp.component.html',
  styleUrls: ['./info-emp.component.css']
})
export class InfoEmpComponent implements OnInit {
  infoObj :any = {};
  constructor(
    private route : ActivatedRoute,
    private router :Router,
    private updateService :EditUpdateEmployeeService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((mparams)=>{
      this.updateService.getEmpById(mparams['id']).subscribe((res)=>{
        console.log(res);
        this.infoObj=res;
      });
    });
    // this.getInfo(this.route.snapshot.params['id'])
  }

  getInfo(id){
    this.updateService.getEmpById(id).subscribe((data)=>{
      this.infoObj=data;
    });

  }
  backToLst(){
    this.router.navigate(['/Employee']);
  }
}
