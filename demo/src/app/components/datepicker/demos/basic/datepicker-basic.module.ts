import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerBasic } from './datepicker-basic';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdDatepickerBasic],
  exports: [NgbdDatepickerBasic],
  bootstrap: [NgbdDatepickerBasic]
})
export class NgbdDatepickerBasicModule {}
