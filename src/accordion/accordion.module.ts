import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgfAccordion, NgfPanel, NgfPanelTitle, NgfPanelContent, NgfPanelHeader, NgfPanelToggle} from './accordion';

export {
  NgfAccordion,
  NgfPanel,
  NgfPanelTitle,
  NgfPanelContent,
  NgfPanelChangeEvent,
  NgfPanelHeader,
  NgfPanelHeaderContext,
  NgfPanelToggle
} from './accordion';
export {NgfAccordionConfig} from './accordion-config';

const NGB_ACCORDION_DIRECTIVES =
    [NgfAccordion, NgfPanel, NgfPanelTitle, NgfPanelContent, NgfPanelHeader, NgfPanelToggle];

@NgModule({declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [CommonModule]})
export class NgfAccordionModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfAccordionModule}; }
}
