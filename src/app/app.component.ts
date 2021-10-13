import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { BloodService } from './blood.service';

interface registerUser {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  blood_group: string;
  location: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Users: any = [];

  constructor(public bloodService: BloodService) {}
  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    return this.bloodService.getUsers().subscribe((data: {}) => {
      this.Users = data;
    });
  }
  term: string = '';
  emailError: string = 'Please Enter Valid Email';
  onSubmit(form: NgForm) {
    const { firstname, lastname, email, num, loc, bg } = form.value;
    const userObj: registerUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: num,
      blood_group: bg,
      location: loc,
    };
    //   this.Users.push(userObj);
    // console.log(this.Users);

    this.bloodService
      .create(userObj)
      .pipe(
        catchError((error) => {
          // todo: for now only handling email error message
          console.log(error);
          this.emailError = error.error.email[0];
          form.form.controls['email'].setErrors({ invalid: true });
          return of();
        })
      )
      .subscribe((user) => this.Users.push(user));
  }
}
