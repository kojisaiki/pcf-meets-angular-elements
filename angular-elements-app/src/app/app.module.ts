import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
  declarations: [NumberInputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
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
  ngDoBootstrap() {}
}
