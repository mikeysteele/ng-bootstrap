import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgfModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NgfdModalConfirm,
  NgfdModalConfirmAutofocus,
  NgfdModalFocus
} from './modal-focus';

@NgModule({
  imports: [BrowserModule, NgfModule],
  declarations: [NgfdModalFocus, NgfdModalConfirm, NgfdModalConfirmAutofocus],
  exports: [NgfdModalFocus],
  bootstrap: [NgfdModalFocus],
  entryComponents: [NgfdModalConfirm, NgfdModalConfirmAutofocus]
})
export class NgfdModalFocusModule {}
