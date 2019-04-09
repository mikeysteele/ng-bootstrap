import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdRatingTemplate } from './rating-template';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdRatingTemplate],
  exports: [NgbdRatingTemplate],
  bootstrap: [NgbdRatingTemplate]
})
export class NgbdRatingTemplateModule {}
