import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgfModal} from './modal';
import {NgfModalBackdrop} from './modal-backdrop';
import {NgfModalWindow} from './modal-window';

export {NgfModal as NgfModal} from './modal';
export {NgfModalConfig, NgfModalOptions as NgfModalOptions} from './modal-config';
export {NgfModalRef, NgfActiveModal} from './modal-ref';
export {ModalDismissReasons} from './modal-dismiss-reasons';

@NgModule({
  declarations: [NgfModalBackdrop, NgfModalWindow],
  entryComponents: [NgfModalBackdrop, NgfModalWindow],
  providers: [NgfModal]
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
