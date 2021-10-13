import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodService } from '../blood.service';

export class User {
  public name: string = '';
  public password: string = '';
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public bloodService: BloodService, private router: Router) {}

  model = new User();
  username: string = '';
  password: string = '';
  showerror: boolean = false;
  user = '1';

  onSubmit(form: NgForm) {
    console.log(form.value.name);

    const username = form.value.name;
    const password = form.value.password;

    const userObj = {
      username: username,
      password: password,
    };

    this.bloodService.loginAdmin(userObj).subscribe((result) => {
      if (result) {
        localStorage.setItem('session', this.user);
        this.router.navigateByUrl('/home');
      } else {
        this.showerror = true;
      }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('session')) {
      this.router.navigateByUrl('/home');
    }
  }
}
