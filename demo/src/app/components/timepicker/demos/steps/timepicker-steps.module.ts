import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTimepickerSteps } from './timepicker-steps';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTimepickerSteps],
  exports: [NgbdTimepickerSteps],
  bootstrap: [NgbdTimepickerSteps]
})
export class NgbdTimepickerStepsModule {}
