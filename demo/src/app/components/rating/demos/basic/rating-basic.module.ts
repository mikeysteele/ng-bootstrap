import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdRatingBasic } from './rating-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdRatingBasic],
  exports: [NgbdRatingBasic],
  bootstrap: [NgbdRatingBasic]
})
export class NgbdRatingBasicModule {}
