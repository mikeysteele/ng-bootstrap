import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutBasic } from './callout-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdCalloutBasic],
  exports: [NgbdCalloutBasic],
  bootstrap: [NgbdCalloutBasic]
})
export class NgbdCalloutBasicModule {}
