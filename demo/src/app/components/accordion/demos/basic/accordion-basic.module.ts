import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionBasic } from './accordion-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdAccordionBasic],
  exports: [NgbdAccordionBasic],
  bootstrap: [NgbdAccordionBasic]
})
export class NgbdAccordionBasicModule {}
