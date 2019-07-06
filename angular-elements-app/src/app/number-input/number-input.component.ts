import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}
}
