import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerPopup } from './datepicker-popup';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerPopup],
  exports: [NgbdDatepickerPopup],
  bootstrap: [NgbdDatepickerPopup]
})
export class NgbdDatepickerPopupModule {}
