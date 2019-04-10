import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgfCollapse} from './collapse';

export {NgfCollapse} from './collapse';

@NgModule({declarations: [NgfCollapse], exports: [NgfCollapse]})
export class NgfCollapseModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfCollapseModule}; }
}
