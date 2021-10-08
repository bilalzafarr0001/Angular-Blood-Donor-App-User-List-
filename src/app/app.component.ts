import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface registerUser {
  firstname: string;
  lastname: string;
  email: string;
  num: number;
  bg: string;
  loc: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usersArray: registerUser[] = [];
  term: string = '';
  onSubmit(form: NgForm) {
    const { firstname, lastname, email, num, loc, bg } = form.value;
    const userObj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      num: num,
      bg: bg,
      loc: loc,
    };
    this.usersArray.push(userObj);
    console.log(this.usersArray);
  }
}
