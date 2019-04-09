import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownSplit } from './dropdown-split';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdDropdownSplit],
  exports: [NgbdDropdownSplit],
  bootstrap: [NgbdDropdownSplit]
})
export class NgbdDropdownSplitModule {}
