import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  posts: object;
  modalContent: string;

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.modalContent = "contact";
  }

  onClick(value){
    this.modalContent = value;
  }

}
