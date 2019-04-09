import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTooltipContainer } from './tooltip-container';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTooltipContainer],
  exports: [NgbdTooltipContainer],
  bootstrap: [NgbdTooltipContainer]
})
export class NgbdTooltipContainerModule {}
