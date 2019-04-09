import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTabsBasic } from './tabs-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdTabsBasic],
  exports: [NgbdTabsBasic],
  bootstrap: [NgbdTabsBasic]
})
export class NgbdTabsBasicModule {}
