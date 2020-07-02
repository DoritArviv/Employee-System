import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { EditUpdateEmployeeComponent } from './components/edit-update-employee/edit-update-employee.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoEmpComponent } from './components/info-emp/info-emp.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { EnterSystemComponent } from './components/enter-system/enter-system.component';


const routes: Routes = [
  {path :'Employee', component : ShowEmployeeComponent},
  {path :'Employee/Creat', component : AddEmployeeComponent},
  {path :'Employee/Edit/:id' , component : EditUpdateEmployeeComponent},
  {path :'Home', component :HomepageComponent},//homepage - welcome page 
  {path :'Employee/Info/:id', component : InfoEmpComponent},
  {path :'login', component: LogInComponent},
  {path :'signup', component : SingUpComponent},
  {path :'', component : EnterSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
