import { NgModule } from '@angular/core';

import { NgfdSharedModule } from '../../shared';
import { NgbdApiDocs, NgbdApiDocsBadge, NgbdApiDocsClass, NgbdApiDocsConfig } from './api-docs';
import { NgfdApiPage } from './api-page/api.component';
import { NgbdWidgetDemoComponent } from './examples-page/demo.component';
import { NgfdExamplesPage } from './examples-page/examples.component';
import { NgbdOverviewDirective, NgbdOverviewSectionComponent } from './overview';

export * from './demo-list';

@NgModule({
  imports: [NgfdSharedModule],
  declarations: [
    NgbdApiDocsBadge,
    NgbdApiDocs,
    NgbdApiDocsClass,
    NgbdApiDocsConfig,
    NgbdOverviewDirective,
    NgbdOverviewSectionComponent,
    NgfdExamplesPage,
    NgfdApiPage,
    NgbdWidgetDemoComponent
  ],
  exports: [
    NgbdApiDocsBadge,
    NgbdApiDocs,
    NgbdApiDocsClass,
    NgbdApiDocsConfig,
    NgbdOverviewDirective,
    NgbdOverviewSectionComponent,
    NgfdExamplesPage,
    NgfdApiPage,
    NgbdWidgetDemoComponent
  ]
})
export class NgfdComponentsSharedModule {}
