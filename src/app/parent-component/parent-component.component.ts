import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
   templateUrl: './parent-component.component.html', 
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  title = 'Parent Component';
  myFontSize : number =0;
 // Counter : number = 5;

  // countChangedHandler(count: number) {
  //   this.Counter = count;
  //   console.log(count);
  // }
  increment() {
    this.myFontSize++;
   }
decrement() {
    this.myFontSize--;
 }
  constructor() { }

  ngOnInit(): void {
  }

}
