import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../model/user';
import {StorageService} from '../../services/storage.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginFrm : FormGroup;
  user : User;
  constructor(
    private fb : FormBuilder,
    private storage : StorageService,
    private router : Router
    ) {
    this.createForm(); 
    this.user = this.storage.getItem('user') ? JSON.parse(this.storage.getItem('user')) : {username : '', password: undefined}
   }

  ngOnInit(): void {
  }

  onLogin(loginFrm : User){
    if(this.loginFrm.invalid){
      window.alert('no user details found')
    this.router.navigate(['signup']);
    }
    else{
        if (this.user.password === loginFrm.password && this.user.username ===loginFrm.username)
        {
          this.router.navigate(['Employee/Creat']);
          }
        else
        {
          window.alert('one or more details are incorrect');
          }
      }
  }

  createForm(){
    this.loginFrm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  Sign(){
    this.router.navigate(['signup']);
  }
}
