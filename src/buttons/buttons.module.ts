import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgfButtonLabel} from './label';
import {NgfCheckbox} from './checkbox';
import {NgbRadio, NgfRadioGroup} from './radio';

export {NgfButtonLabel} from './label';
export {NgfCheckbox} from './checkbox';
export {NgbRadio, NgfRadioGroup} from './radio';


const NGB_BUTTON_DIRECTIVES = [NgfButtonLabel, NgfCheckbox, NgfRadioGroup, NgbRadio];

@NgModule({declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES})
export class NgfButtonsModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfButtonsModule}; }
}
