import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTabsSelectbyid } from './tabs-selectbyid';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdTabsSelectbyid],
  exports: [NgbdTabsSelectbyid],
  bootstrap: [NgbdTabsSelectbyid]
})
export class NgbdTabsSelectbyidModule {}
