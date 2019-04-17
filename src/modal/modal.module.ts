import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgfModal} from './modal';
import {NgfModalBackdrop} from './modal-backdrop';
import {NgfModalWindow} from './modal-window';
import { NgfModalOpenGuard } from './modal-open.guard';

export {NgfModal as NgfModal} from './modal';
export {NgfModalConfig, NgfModalOptions as NgfModalOptions} from './modal-config';
export {NgfModalRef, NgfActiveModal} from './modal-ref';
export {ModalDismissReasons} from './modal-dismiss-reasons';
export { NgfModalOpenGuard as ModalOpen } from './modal-open.guard';

@NgModule({
  declarations: [NgfModalBackdrop, NgfModalWindow],
  entryComponents: [NgfModalBackdrop, NgfModalWindow],
  providers: [NgfModal, NgfModalOpenGuard]
})
export class NgfModalModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfModalModule}; }
}
