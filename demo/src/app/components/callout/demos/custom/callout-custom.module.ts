import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutCustom } from './callout-custom';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdCalloutCustom],
  exports: [NgbdCalloutCustom],
  bootstrap: [NgbdCalloutCustom]
})
export class NgbdCalloutCustomModule {}
