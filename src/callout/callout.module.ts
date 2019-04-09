import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbCallout} from './callout';

export {NgbCallout} from './callout';
export {NgbCalloutConfig} from './callout-config';

@NgModule({declarations: [NgbCallout], exports: [NgbCallout], imports: [CommonModule], entryComponents: [NgbCallout]})
export class NgbCalloutModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgbCalloutModule}; }
}
