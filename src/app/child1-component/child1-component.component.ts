import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1-component',
  templateUrl: './child1-component.component.html',
  styleUrls: ['./child1-component.component.css']
})
export class Child1ComponentComponent implements OnInit {

  constructor() { }
  title = 'Child Component';
  @Input() count: number = 0;
 
   @Output() countChanged: EventEmitter<number> =   new EventEmitter<number>();
   increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
  ngOnInit(): void {
  }

}
