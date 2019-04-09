import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverBasic } from './popover-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverBasic],
  exports: [NgbdPopoverBasic],
  bootstrap: [NgbdPopoverBasic]
})
export class NgbdPopoverBasicModule {}
