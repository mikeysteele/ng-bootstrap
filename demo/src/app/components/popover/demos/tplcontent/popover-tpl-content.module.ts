import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverTplcontent } from './popover-tplcontent';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverTplcontent],
  exports: [NgbdPopoverTplcontent],
  bootstrap: [NgbdPopoverTplcontent]
})
export class NgbdPopoverTplContentModule {}
