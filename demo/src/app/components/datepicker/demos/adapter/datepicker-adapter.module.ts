import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerAdapter } from './datepicker-adapter';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerAdapter],
  exports: [NgbdDatepickerAdapter],
  bootstrap: [NgbdDatepickerAdapter]
})
export class NgbdDatepickerAdapterModule {}
