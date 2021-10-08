import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
 

export class User {
  public name: string = "";
   
  public password: string = "";
 }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']
  
})
 
  
export class LoginComponent implements OnInit {

  model = new User();
  onSubmit(form : NgForm) {
    console.log(form.value.name)
    
   localStorage.setItem('name',form.value.name);
    this.router.navigateByUrl('/home');
 
  }
  constructor(private router: Router) { }
   
  ngOnInit(): void {
  }

}

 