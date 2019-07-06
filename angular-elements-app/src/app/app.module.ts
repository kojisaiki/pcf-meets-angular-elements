import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
  declarations: [AppComponent, NumberInputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NumberInputComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(NumberInputComponent, {
      // tslint:disable-next-line: object-literal-shorthand
      injector: injector,
    });
    customElements.define('app-number-input', custom);
  }
}
