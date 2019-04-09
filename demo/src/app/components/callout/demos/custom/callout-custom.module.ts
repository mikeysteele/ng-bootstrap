import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutCustom } from './callout-custom';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdCalloutCustom],
  exports: [NgbdCalloutCustom],
  bootstrap: [NgbdCalloutCustom]
})
export class NgbdCalloutCustomModule {}
