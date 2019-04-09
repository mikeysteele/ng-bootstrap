import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownConfig } from './dropdown-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdDropdownConfig],
  exports: [NgbdDropdownConfig],
  bootstrap: [NgbdDropdownConfig]
})
export class NgbdDropdownConfigModule {}
