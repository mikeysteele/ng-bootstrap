import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdProgressbarShowvalue } from './progressbar-showvalue';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdProgressbarShowvalue],
  exports: [NgbdProgressbarShowvalue],
  bootstrap: [NgbdProgressbarShowvalue]
})
export class NgbdProgressbarShowValueModule {}
