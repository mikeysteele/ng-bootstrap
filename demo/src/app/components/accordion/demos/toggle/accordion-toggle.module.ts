import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionToggle } from './accordion-toggle';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdAccordionToggle],
  exports: [NgbdAccordionToggle],
  bootstrap: [NgbdAccordionToggle]
})
export class NgbdAccordionToggleModule {}
