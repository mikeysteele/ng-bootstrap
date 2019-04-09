import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdRatingEvents } from './rating-events';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdRatingEvents],
  exports: [NgbdRatingEvents],
  bootstrap: [NgbdRatingEvents]
})
export class NgbdRatingEventsModule {}
