import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { EditUpdateEmployeeComponent } from './components/edit-update-employee/edit-update-employee.component';
//imports for reactive Forms and Http Client
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InfoEmpComponent } from './components/info-emp/info-emp.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { EnterSystemComponent } from './components/enter-system/enter-system.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule} from "@angular/material/dialog"

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ShowEmployeeComponent,
    EditUpdateEmployeeComponent,
    HomepageComponent,
    InfoEmpComponent,
    LogInComponent,
    SingUpComponent,
    EnterSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
