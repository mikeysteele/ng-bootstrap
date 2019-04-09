import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownManual } from './dropdown-manual';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdDropdownManual],
  exports: [NgbdDropdownManual],
  bootstrap: [NgbdDropdownManual]
})
export class NgbdDropdownManualModule {}
