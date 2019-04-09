import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTimepickerValidation } from './timepicker-validation';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgfModule],
  declarations: [NgbdTimepickerValidation],
  exports: [NgbdTimepickerValidation],
  bootstrap: [NgbdTimepickerValidation]
})
export class NgbdTimepickerValidationModule {}
