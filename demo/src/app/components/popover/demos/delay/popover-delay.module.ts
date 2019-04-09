import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverDelay } from './popover-delay';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverDelay],
  exports: [NgbdPopoverDelay],
  bootstrap: [NgbdPopoverDelay]
})
export class NgbdPopoverDelayModule {}
