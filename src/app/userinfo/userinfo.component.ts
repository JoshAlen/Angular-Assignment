import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user = {
    username: '',
    role: ''
  }
  constructor() { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.user = user;
  }

}
