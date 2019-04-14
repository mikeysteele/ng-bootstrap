import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdOffCanvasBasic } from './off-canvas-basic';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgbdOffCanvasBasic],
  exports: [NgbdOffCanvasBasic],
  bootstrap: [NgbdOffCanvasBasic]
})
export class NgbdPopoverBasicModule {}
