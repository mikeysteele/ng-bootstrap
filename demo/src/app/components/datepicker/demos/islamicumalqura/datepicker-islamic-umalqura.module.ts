import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerIslamicumalqura } from './datepicker-islamicumalqura';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerIslamicumalqura],
  exports: [NgbdDatepickerIslamicumalqura],
  bootstrap: [NgbdDatepickerIslamicumalqura]
})
export class NgbdDatepickerIslamicUmalquraModule {}
