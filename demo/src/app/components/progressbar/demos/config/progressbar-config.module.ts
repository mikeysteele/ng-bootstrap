import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdProgressbarConfig } from './progressbar-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdProgressbarConfig],
  exports: [NgbdProgressbarConfig],
  bootstrap: [NgbdProgressbarConfig]
})
export class NgbdProgressbarConfigModule {}
