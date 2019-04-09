import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdRatingConfig } from './rating-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdRatingConfig],
  exports: [NgbdRatingConfig],
  bootstrap: [NgbdRatingConfig]
})
export class NgbdRatingConfigModule {}
