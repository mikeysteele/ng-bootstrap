import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgfTabs, NgfTab, NgfTabContent, NgfTabTitle} from './tabs';

export {NgfTabs, NgfTab, NgfTabContent, NgfTabTitle, NgfTabChangeEvent} from './tabs';
export {NgfTabsConfig} from './tabs-config';

const NGB_TABSET_DIRECTIVES = [NgfTabs, NgfTab, NgfTabContent, NgfTabTitle];

@NgModule({declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [CommonModule]})
export class NgfTabsModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfTabsModule}; }
}
