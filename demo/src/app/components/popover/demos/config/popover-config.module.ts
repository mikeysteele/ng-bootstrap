import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverConfig } from './popover-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverConfig],
  exports: [NgbdPopoverConfig],
  bootstrap: [NgbdPopoverConfig]
})
export class NgbdPopoverConfigModule {}
