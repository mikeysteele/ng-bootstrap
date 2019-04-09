import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTabsJustify } from './tabs-justify';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTabsJustify],
  exports: [NgbdTabsJustify],
  bootstrap: [NgbdTabsJustify]
})
export class NgbdTabsJustifyModule {}
