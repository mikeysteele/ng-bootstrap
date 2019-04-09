import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPopoverVisibility } from './popover-visibility';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPopoverVisibility],
  exports: [NgbdPopoverVisibility],
  bootstrap: [NgbdPopoverVisibility]
})
export class NgbdPopoverVisibilityModule {}
