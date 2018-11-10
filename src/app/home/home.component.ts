import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  posts: object;
  modalContent: string;

  constructor(private router: Router) { 
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this.router.navigate(["/login"]);
    }
    this.modalContent = "contact";
  }

  onClick(value){
    this.modalContent = value;
  }

}
