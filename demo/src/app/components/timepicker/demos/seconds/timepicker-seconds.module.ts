import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTimepickerSeconds } from './timepicker-seconds';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTimepickerSeconds],
  exports: [NgbdTimepickerSeconds],
  bootstrap: [NgbdTimepickerSeconds]
})
export class NgbdTimepickerSecondsModule {}
