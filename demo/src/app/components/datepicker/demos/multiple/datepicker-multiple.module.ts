import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerMultiple } from './datepicker-multiple';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerMultiple],
  exports: [NgbdDatepickerMultiple],
  bootstrap: [NgbdDatepickerMultiple]
})
export class NgbdDatepickerMultipleModule {}
