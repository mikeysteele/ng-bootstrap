import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgfdModalBasic } from './modal-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgfdModalBasic],
  exports: [NgfdModalBasic],
  bootstrap: [NgfdModalBasic]
})
export class NgfdModalBasicModule {}
