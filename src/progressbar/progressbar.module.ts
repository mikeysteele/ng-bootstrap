import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgfProgressbar} from './progressbar';

export {NgfProgressbar} from './progressbar';
export {NgfProgressbarConfig} from './progressbar-config';

@NgModule({declarations: [NgfProgressbar], exports: [NgfProgressbar], imports: [CommonModule]})
export class NgfProgressbarModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfProgressbarModule}; }
}
