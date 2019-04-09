import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTabsPreventchange } from './tabs-preventchange';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdTabsPreventchange],
  exports: [NgbdTabsPreventchange],
  bootstrap: [NgbdTabsPreventchange]
})
export class NgbdTabsPreventChangeModule {}
