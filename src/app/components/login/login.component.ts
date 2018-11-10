import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  onSubmit(loginForm: NgForm) {
    this.http
      .post("http://localhost:3000/users/login", {
        username: loginForm.value.username,
        password: loginForm.value.password
      })
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem("currentUser", JSON.stringify(res));          
          this.router.navigate(["/"]);
        },
        error => {
          console.log("Something went wrong");
        }
      );
  }
}
