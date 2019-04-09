import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionPreventchange } from './accordion-preventchange';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdAccordionPreventchange],
  exports: [NgbdAccordionPreventchange],
  bootstrap: [NgbdAccordionPreventchange]
})
export class NgbdAccordionPreventchangeModule {}
