import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTooltipTplcontent } from './tooltip-tplcontent';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTooltipTplcontent],
  exports: [NgbdTooltipTplcontent],
  bootstrap: [NgbdTooltipTplcontent]
})
export class NgbdTooltipTplContentModule {}
