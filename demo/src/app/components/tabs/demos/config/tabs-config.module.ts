import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTabsConfig } from './tabs-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdTabsConfig],
  exports: [NgbdTabsConfig],
  bootstrap: [NgbdTabsConfig]
})
export class NgbdTabsConfigModule {}
