import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTabsOrientation } from './tabs-orientation';

@NgModule({
  imports: [BrowserModule, FormsModule, NgfModule],
  declarations: [NgbdTabsOrientation],
  exports: [NgbdTabsOrientation],
  bootstrap: [NgbdTabsOrientation]
})
export class NgbdTabsOrientationModule {}
