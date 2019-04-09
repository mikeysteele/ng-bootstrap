import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationJustify } from './pagination-justify';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPaginationJustify],
  exports: [NgbdPaginationJustify],
  bootstrap: [NgbdPaginationJustify]
})
export class NgbdPaginationJustifyModule {}
