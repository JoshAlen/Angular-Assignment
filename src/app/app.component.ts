import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  firstName = 'Joshua';
  lastName: string;
  status: boolean = false;
  posts: object[]; 
  user = {
    username: '',
    password: '',
  }

  constructor(){
    console.log('constructor......');
    
    this.posts = [
      {title: 'post 1'},
      {title: 'post 2'},
      {title: 'post 3'},
      {title: 'post 4'},
      {title: 'post 5'}
    ]
  }

  displayFirstName(){
    return this.firstName;
  }

  getUserStatus(){
   this.status = true;
  }

  greetPerson(){
    alert('HI');
  }

  mousingOver(){
    console.log("we just mouse over.");
  }
  
  keyDowning(){
    console.log('You just key down.');
  }

  onSubmit(theForm: NgForm){
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    console.log(this.user);
  }

}


