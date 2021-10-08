import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1-component',
  templateUrl: './parent1-component.component.html',
  styleUrls: ['./parent1-component.component.css']
})
export class Parent1ComponentComponent implements OnInit {

  constructor() { }
  title = 'Parent Component';
  myFontSize : number =0;

  countChangedHandler(count: number) {
    this.myFontSize = count;
    console.log(count);
  }
  ngOnInit(): void {
  }

}
