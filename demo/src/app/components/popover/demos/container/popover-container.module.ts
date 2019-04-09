import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverContainer } from './popover-container';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverContainer],
  exports: [NgbdPopoverContainer],
  bootstrap: [NgbdPopoverContainer]
})
export class NgbdPopoverContainerModule {}
