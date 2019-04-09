import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownForm } from './dropdown-form';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdDropdownForm],
  exports: [NgbdDropdownForm],
  bootstrap: [NgbdDropdownForm]
})
export class NgbdDropdownFormModule {}
