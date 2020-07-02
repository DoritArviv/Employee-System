import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../model/user';
import {StorageService} from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  signupFrm : FormGroup;
  user : User;
  constructor(
    private fb :FormBuilder,
    private storage : StorageService,
    private router : Router)
    {
      this.createForm();
      this.user = this.storage.getItem('user') ? JSON.parse(this.storage.getItem('user')) : {username : '', password: ''};

     }

  ngOnInit(): void {
    this.user = this.storage.getItem('user') ? JSON.parse(this.storage.getItem('user')) : {username : '', password: ''};
  }

  createForm(){
    this.signupFrm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  } 

  onSign(signupFrm : User){
    if(this.user.username === '')
      {
      this.storage.setItem('user',{username : signupFrm.username, password : signupFrm.password });
      this.router.navigate(['login']);
    }
    
  }
}
