import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import { NgfdModalConfig } from './modal-config';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgfdModalConfig],
  exports: [NgfdModalConfig],
  bootstrap: [NgfdModalConfig]
})
export class NgfdModalConfigModule {}
