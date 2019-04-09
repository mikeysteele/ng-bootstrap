import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdProgressbarBasic } from './progressbar-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdProgressbarBasic],
  exports: [NgbdProgressbarBasic],
  bootstrap: [NgbdProgressbarBasic]
})
export class NgbdProgressbarBasicModule {}
