import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownBasic } from './dropdown-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdDropdownBasic],
  exports: [NgbdDropdownBasic],
  bootstrap: [NgbdDropdownBasic]
})
export class NgbdDropdownBasicModule {}
