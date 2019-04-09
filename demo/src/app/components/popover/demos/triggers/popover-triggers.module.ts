import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverTriggers } from './popover-triggers';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverTriggers],
  exports: [NgbdPopoverTriggers],
  bootstrap: [NgbdPopoverTriggers]
})
export class NgbdPopoverTriggersModule {}
