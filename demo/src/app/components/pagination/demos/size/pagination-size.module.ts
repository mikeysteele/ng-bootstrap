import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationSize } from './pagination-size';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPaginationSize],
  exports: [NgbdPaginationSize],
  bootstrap: [NgbdPaginationSize]
})
export class NgbdPaginationSizeModule {}
