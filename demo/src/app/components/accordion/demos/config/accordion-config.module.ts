import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionConfig } from './accordion-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdAccordionConfig],
  exports: [NgbdAccordionConfig],
  bootstrap: [NgbdAccordionConfig]
})
export class NgbdAccordionConfigModule {}
