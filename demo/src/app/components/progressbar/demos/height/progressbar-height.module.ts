import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdProgressbarHeight } from './progressbar-height';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdProgressbarHeight],
  exports: [NgbdProgressbarHeight],
  bootstrap: [NgbdProgressbarHeight]
})
export class NgbdProgressbarHeightModule {}
