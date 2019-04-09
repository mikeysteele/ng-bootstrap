import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerCustomday } from './datepicker-customday';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerCustomday],
  exports: [NgbdDatepickerCustomday],
  bootstrap: [NgbdDatepickerCustomday]
})
export class NgbdDatepickerCustomdayModule {}
