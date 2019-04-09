import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerDisabled } from './datepicker-disabled';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerDisabled],
  exports: [NgbdDatepickerDisabled],
  bootstrap: [NgbdDatepickerDisabled]
})
export class NgbdDatepickerDisabledModule {}
