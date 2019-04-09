import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgfDropdown, NgfDropdownAnchor, NgfDropdownToggle, NgfDropdownMenu, NgfDropdownItem} from './dropdown';

export {NgfDropdown, NgfDropdownAnchor, NgfDropdownToggle, NgfDropdownMenu, NgfDropdownItem} from './dropdown';
export {NgfDropdownConfig} from './dropdown-config';

const NGB_DROPDOWN_DIRECTIVES = [NgfDropdown, NgfDropdownAnchor, NgfDropdownToggle, NgfDropdownMenu, NgfDropdownItem];

@NgModule({declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES})
export class NgfDropdownModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfDropdownModule}; }
}
