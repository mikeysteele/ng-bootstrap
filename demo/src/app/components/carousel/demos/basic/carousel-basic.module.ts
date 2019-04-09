import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdCarouselBasic],
  exports: [NgbdCarouselBasic],
  bootstrap: [NgbdCarouselBasic]
})
export class NgbdCarouselBasicModule {}
