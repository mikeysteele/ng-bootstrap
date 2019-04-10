import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgfTimepicker} from './timepicker';

export {NgfTimepicker} from './timepicker';
export {NgfTimepickerConfig} from './timepicker-config';
export {NgfTimeStruct} from './ngf-time-struct';
export {NgfTimeAdapter} from './ngf-time-adapter';

@NgModule({declarations: [NgfTimepicker], exports: [NgfTimepicker], imports: [CommonModule]})
export class NgfTimepickerModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfTimepickerModule}; }
}
