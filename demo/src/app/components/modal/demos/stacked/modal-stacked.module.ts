import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NgfdModal1Content,
  NgfdModal2Content,
  NgfdModalStacked
} from './modal-stacked';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgfdModalStacked, NgfdModal1Content, NgfdModal2Content],
  exports: [NgfdModalStacked],
  bootstrap: [NgfdModalStacked],
  entryComponents: [NgfdModal1Content, NgfdModal2Content]
})
export class NgfdModalStackedModule {}
