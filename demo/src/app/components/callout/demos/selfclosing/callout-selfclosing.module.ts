import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutSelfclosing } from './callout-selfclosing';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdCalloutSelfclosing],
  exports: [NgbdCalloutSelfclosing],
  bootstrap: [NgbdCalloutSelfclosing]
})
export class NgbdCalloutSelfclosingModule {}
