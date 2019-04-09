import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutSelfclosing } from './callout-selfclosing';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdCalloutSelfclosing],
  exports: [NgbdCalloutSelfclosing],
  bootstrap: [NgbdCalloutSelfclosing]
})
export class NgbdCalloutSelfclosingModule {}
