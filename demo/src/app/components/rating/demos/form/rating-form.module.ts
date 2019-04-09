import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdRatingForm } from './rating-form';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgfModule],
  declarations: [NgbdRatingForm],
  exports: [NgbdRatingForm],
  bootstrap: [NgbdRatingForm]
})
export class NgbdRatingFormModule {}
