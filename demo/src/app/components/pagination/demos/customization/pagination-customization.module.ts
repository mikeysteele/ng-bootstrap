import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationCustomization } from './pagination-customization';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdPaginationCustomization],
  exports: [NgbdPaginationCustomization],
  bootstrap: [NgbdPaginationCustomization]
})
export class NgbdPaginationCustomizationModule {}
