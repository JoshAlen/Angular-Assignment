import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  name: string;
  surname: string;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log("---------------");
    console.log("Name: " + form.value.name);
    console.log("surname: " + form.value.surname);
    console.log("message: " + form.value.message);
    console.log("---------------");
  }

}
