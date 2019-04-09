import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutConfig } from './callout-config';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdCalloutConfig],
  exports: [NgbdCalloutConfig],
  bootstrap: [NgbdCalloutConfig]
})
export class NgbdCalloutConfigModule {}
