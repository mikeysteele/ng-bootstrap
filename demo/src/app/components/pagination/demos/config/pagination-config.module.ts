import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationConfig } from './pagination-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPaginationConfig],
  exports: [NgbdPaginationConfig],
  bootstrap: [NgbdPaginationConfig]
})
export class NgbdPaginationConfigModule {}
