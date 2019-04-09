import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerRange } from './datepicker-range';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdDatepickerRange],
  exports: [NgbdDatepickerRange],
  bootstrap: [NgbdDatepickerRange]
})
export class NgbdDatepickerRangeModule {}
