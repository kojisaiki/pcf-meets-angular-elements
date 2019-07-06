import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  @Input() title;
  @Input() rname;
  @Input() occupation;
  @Input() location;
  @Input() first;

  @Output() display = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  showInfo() {
    this.display.emit(`Name: ${this.rname}
    Occupation: ${this.occupation}
    Based In: ${this.location}
    First Appearance: ${this.first}`);
  }
}
