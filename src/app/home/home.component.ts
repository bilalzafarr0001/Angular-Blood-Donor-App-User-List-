import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, first } from 'rxjs/internal/operators';
import { BloodService } from '../blood.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface registerUser {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  blood_group: string;
  location: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Users: any = [];
  userObj: any = '';
  id!: number;
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  blood_group: string = '';
  location: string = '';

  constructor(
    public bloodService: BloodService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    return this.bloodService.getUsers().subscribe((data: {}) => {
      console.log('data', data);
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
      .subscribe((res) => {
        console.log(res);
        this.fetchUsers();
      });
  }
  logOut() {
    this.bloodService.signOut().subscribe((result) => {
      if (result) {
        console.log(result);
        this.router.navigateByUrl('/login');
      }
    });
  }

  deleteUser(id: number) {
    if (!confirm('Are you sure you want to del this item?')) return;
    this.bloodService.delete(id).subscribe((res) => {
      console.log(res);
      this.fetchUsers();
    });
    this.toastr.success('User Record Deleted Successfully !');
  }

  onSubmitForm(form: NgForm) {
    console.log('on Submit Form Function here the id is', this.id);
    console.log('on Submit Form Function here the FORM is', form.value);

    const { firstname, lastname, email, num, loc, bg } = form.value;
    const userObj: registerUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: num,
      blood_group: bg,
      location: loc,
    };

    this.bloodService
      .update(this.id, userObj)
      .pipe(
        catchError((error) => {
          // todo: for now only handling email error message
          console.log(error);
          this.emailError = error.error.email[0];
          form.form.controls['email'].setErrors({ invalid: true });
          return of();
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.fetchUsers();
      });
  }

  editUser(id: number) {
    console.log('is is the edit user function with id of ', id);
    this.bloodService
      .getUser(id)

      .subscribe((res: any) => {
        this.id = res[0].id;
        this.firstname = res[0].firstname;
        this.lastname = res[0].lastname;
        this.email = res[0].email;
        this.phone = res[0].phone;
        this.blood_group = res[0].blood_group;
        this.location = res[0].location;
      });
  }

  // const { firstname, lastname, email, num, loc, bg } = form.value;
  // const userObj: registerUser = {
  //   firstname: firstname,
  //   lastname: lastname,
  //   email: email,
  //   phone: num,
  //   blood_group: bg,
  //   location: loc,
  // };
  // this.bloodService.update(id, userObj).subscribe((res) => {
  //   console.log(res);
  //   this.fetchUsers();
  // });
}
