import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(forgotpasswordForm: NgForm) {
    this.http.post('http://localhost:3000/users/forgotpassword', {
      username: forgotpasswordForm.value.username
    }).subscribe(res => {
      console.log(res);
      this.password = res["password"]
    }, error => {
      console.log('Something went wrong');
    })
  }
}
