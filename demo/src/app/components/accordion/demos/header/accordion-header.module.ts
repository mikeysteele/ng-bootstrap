import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionHeader } from './accordion-header';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdAccordionHeader],
  exports: [NgbdAccordionHeader],
  bootstrap: [NgbdAccordionHeader]
})
export class NgbdAccordionHeaderModule {}
