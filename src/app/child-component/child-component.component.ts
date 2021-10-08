import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<h2 [ngStyle] = "{'font-size.px': count}"   *ngIf="count!=0">{{ title }}</h2>
`
})
export class ChildComponentComponent implements OnInit {
  title = 'Child Component';
  @Input() count: number = 0;
 
//   @Output() countChanged: EventEmitter<number> =   new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
