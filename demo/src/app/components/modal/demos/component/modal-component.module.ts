import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgfdModalComponent, NgfdModalContent } from './modal-component';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgfdModalComponent, NgfdModalContent],
  exports: [NgfdModalComponent],
  bootstrap: [NgfdModalComponent],
  entryComponents: [NgfdModalContent]
})
export class NgfdModalComponentModule {}
