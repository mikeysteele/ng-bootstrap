import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdRatingDecimal } from './rating-decimal';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdRatingDecimal],
  exports: [NgbdRatingDecimal],
  bootstrap: [NgbdRatingDecimal]
})
export class NgbdRatingDecimalModule {}
