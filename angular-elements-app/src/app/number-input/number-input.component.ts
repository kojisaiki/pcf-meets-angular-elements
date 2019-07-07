import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  @Input()
  set value(v: number) {
    this.modelValue = String(v);
  }

  @Output() valueChanged = new EventEmitter<number>();

  private innerValue: string;
  set modelValue(v: string) {
    this.innerValue = v;
    try {
      const v2 = Number(this.innerValue);
      if (Number.isNaN(v2)) {
        this.innerValue = '0';
      }
    } catch (e) {
      this.innerValue = '0';
    }

    this.valueChanged.emit(Number(this.innerValue));
  }
  get modelValue(): string {
    return this.innerValue;
  }

  constructor() {}

  ngOnInit() {}

  decrement() {
    console.log('decrement');
    try {
      const v = Number(this.modelValue);
      console.log('before:' + v);
      if (!Number.isNaN(v)) {
        this.modelValue = String(v - 1);
        console.log('after:' + this.modelValue);
      } else {
        this.modelValue = '0';
      }
    } catch (e) {
      this.modelValue = '0';
    }
  }

  increment() {
    console.log('increment');
    try {
      const v = Number(this.modelValue);
      console.log('before:' + v);
      if (!Number.isNaN(v)) {
        this.modelValue = String(v + 1);
        console.log('after:' + this.modelValue);
      } else {
        this.modelValue = '0';
      }
    } catch (e) {
      this.modelValue = '0';
    }
  }
}
