import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverAutoclose } from './popover-autoclose';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverAutoclose],
  exports: [NgbdPopoverAutoclose],
  bootstrap: [NgbdPopoverAutoclose]
})
export class NgbdPopoverAutocloseModule {}
