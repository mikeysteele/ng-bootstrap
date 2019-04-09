import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationAdvanced } from './pagination-advanced';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPaginationAdvanced],
  exports: [NgbdPaginationAdvanced],
  bootstrap: [NgbdPaginationAdvanced]
})
export class NgbdPaginationAdvancedModule {}
