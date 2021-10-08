import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class User {
  public name: string = '';
  public email: string = '';
  public password: string = '';
}
interface LoginUser {
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
})
export class RegisterComponentComponent implements OnInit {
  router: any;

  constructor() {
    localStorage.setItem('usersArray', '[]');
  }

  model = new User();
  // testArr = [];
  onSubmit(form: NgForm) {
    const { name, email, password } = form.value;

    const usersArray: LoginUser[] = JSON.parse(localStorage['usersArray']); // []
    const userObj = { name: name, email: email, password: password };
    usersArray.push(userObj);
    localStorage.setItem('usersArray', JSON.stringify(usersArray));

    // window.location.href = 'http://localhost:4200/home';
  }
  ngOnInit(): void {}
}
