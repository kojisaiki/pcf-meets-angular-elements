import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMessage() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-number-input></app-number-input>';
  }
}
