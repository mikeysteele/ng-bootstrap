import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCalloutCloseable } from './callout-closeable';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdCalloutCloseable],
  exports: [NgbdCalloutCloseable],
  bootstrap: [NgbdCalloutCloseable]
})
export class NgbdCalloutCloseableModule {}
