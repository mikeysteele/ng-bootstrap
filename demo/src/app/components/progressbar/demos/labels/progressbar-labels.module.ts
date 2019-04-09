import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdProgressbarLabels } from './progressbar-labels';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdProgressbarLabels],
  exports: [NgbdProgressbarLabels],
  bootstrap: [NgbdProgressbarLabels]
})
export class NgbdProgressbarLabelsModule {}
