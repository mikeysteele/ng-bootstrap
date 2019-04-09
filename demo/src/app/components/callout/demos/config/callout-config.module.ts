import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutConfig } from './callout-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdCalloutConfig],
  exports: [NgbdCalloutConfig],
  bootstrap: [NgbdCalloutConfig]
})
export class NgbdCalloutConfigModule {}
