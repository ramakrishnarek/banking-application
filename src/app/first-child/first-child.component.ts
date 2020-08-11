import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
  constructor() { }
  @Input('parentData') public name;
  @Output() childEvent = new EventEmitter();
  fireEvent() {   
        this.childEvent.emit('Output message from Child to parent');
    }

  ngOnInit() {
  }



}
