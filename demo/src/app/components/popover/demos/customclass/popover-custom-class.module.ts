import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverCustomclass } from './popover-customclass';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverCustomclass],
  exports: [NgbdPopoverCustomclass],
  bootstrap: [NgbdPopoverCustomclass]
})
export class NgbdPopoverCustomClassModule {}
