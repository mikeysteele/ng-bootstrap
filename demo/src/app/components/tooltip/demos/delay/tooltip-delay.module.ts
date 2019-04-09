import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTooltipDelay } from './tooltip-delay';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTooltipDelay],
  exports: [NgbdTooltipDelay],
  bootstrap: [NgbdTooltipDelay]
})
export class NgbdTooltipDelayModule {}
