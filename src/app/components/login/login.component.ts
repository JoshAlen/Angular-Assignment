import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  user = {
    username: "",
    password: ""
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm){
    this.user.username = loginForm.value.username;
    this.user.password = loginForm.value.password;
    console.log(this.user);
  }
  
}
