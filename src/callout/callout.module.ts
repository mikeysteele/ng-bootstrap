import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgfCallout} from './callout';

export {NgfCallout} from './callout';
export {NgfCalloutConfig} from './callout-config';

@NgModule({declarations: [NgfCallout], exports: [NgfCallout], imports: [CommonModule], entryComponents: [NgfCallout]})
export class NgfCalloutModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfCalloutModule}; }
}
