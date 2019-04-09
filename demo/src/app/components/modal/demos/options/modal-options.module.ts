import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgfdModalOptions } from './modal-options';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgfdModalOptions],
  exports: [NgfdModalOptions],
  bootstrap: [NgfdModalOptions]
})
export class NgfdModalOptionsModule {}
