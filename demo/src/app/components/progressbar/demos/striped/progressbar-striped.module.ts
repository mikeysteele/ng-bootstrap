import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdProgressbarStriped } from './progressbar-striped';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdProgressbarStriped],
  exports: [NgbdProgressbarStriped],
  bootstrap: [NgbdProgressbarStriped]
})
export class NgbdProgressbarStripedModule {}
