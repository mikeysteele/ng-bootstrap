import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerHebrew } from './datepicker-hebrew';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerHebrew],
  exports: [NgbdDatepickerHebrew],
  bootstrap: [NgbdDatepickerHebrew]
})
export class NgbdDatepickerHebrewModule {}
