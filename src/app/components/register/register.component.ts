import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm) {
    const user = registerForm.value;
    this.http.post('http://localhost:3000/users', {
      username: user.username,
      password: user.password,
      role: user.role
    }).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login']);
    }, error => {
      console.log('something went wrong...');
    })
  }
}
