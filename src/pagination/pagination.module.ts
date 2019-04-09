import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  NgfPagination,
  NgfPaginationEllipsis,
  NgfPaginationFirst,
  NgfPaginationLast,
  NgfPaginationNext,
  NgfPaginationNumber,
  NgfPaginationPrevious
} from './pagination';

export {
  NgfPagination,
  NgfPaginationEllipsis,
  NgfPaginationFirst,
  NgfPaginationLast,
  NgfPaginationNext,
  NgfPaginationNumber,
  NgfPaginationPrevious
} from './pagination';
export {NgfPaginationConfig} from './pagination-config';

const DIRECTIVES = [
  NgfPagination, NgfPaginationEllipsis, NgfPaginationFirst, NgfPaginationLast, NgfPaginationNext, NgfPaginationNumber,
  NgfPaginationPrevious
];

@NgModule({declarations: DIRECTIVES, exports: DIRECTIVES, imports: [CommonModule]})
export class NgfPaginationModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfPaginationModule}; }
}
