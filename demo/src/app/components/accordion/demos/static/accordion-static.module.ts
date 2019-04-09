import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionStatic } from './accordion-static';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdAccordionStatic],
  exports: [NgbdAccordionStatic],
  bootstrap: [NgbdAccordionStatic]
})
export class NgbdAccordionStaticModule {}
