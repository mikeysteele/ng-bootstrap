import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationBasic } from './pagination-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPaginationBasic],
  exports: [NgbdPaginationBasic],
  bootstrap: [NgbdPaginationBasic]
})
export class NgbdPaginationBasicModule {}
