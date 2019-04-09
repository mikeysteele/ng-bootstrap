import { NgModule } from '@angular/core';

import { NgfdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgfdComponentsSharedModule, NgfdDemoList } from '../shared';
import { NgfdApiPage } from '../shared/api-page/api.component';
import { NgfdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdCalloutBasic } from './demos/basic/callout-basic';
import { NgbdCalloutBasicModule } from './demos/basic/callout-basic.module';
import { NgbdCalloutCloseable } from './demos/closeable/callout-closeable';
import { NgbdCalloutCloseableModule } from './demos/closeable/callout-closeable.module';
import { NgbdCalloutConfig } from './demos/config/callout-config';
import { NgbdCalloutConfigModule } from './demos/config/callout-config.module';
import { NgbdCalloutCustom } from './demos/custom/callout-custom';
import { NgbdCalloutCustomModule } from './demos/custom/callout-custom.module';
import { NgbdCalloutSelfclosing } from './demos/selfclosing/callout-selfclosing';
import { NgbdCalloutSelfclosingModule } from './demos/selfclosing/callout-selfclosing.module';

const DEMOS = {
  basic: {
    title: 'Basic Callout',
    type: NgbdCalloutBasic,
    files: [
      {
        name: 'callout-basic.html',
        source: require('!!raw-loader!./demos/basic/callout-basic.html')
      },
      {
        name: 'callout-basic.ts',
        source: require('!!raw-loader!./demos/basic/callout-basic')
      }
    ]
  },
  closeable: {
    title: 'Closable Callout',
    type: NgbdCalloutCloseable,
    files: [
      {
        name: 'callout-closeable.html',
        source: require('!!raw-loader!./demos/closeable/callout-closeable.html')
      },
      {
        name: 'callout-closeable.ts',
        source: require('!!raw-loader!./demos/closeable/callout-closeable')
      }
    ]
  },
  selfclosing: {
    title: 'Self closing callout',
    type: NgbdCalloutSelfclosing,
    files: [
      {
        name: 'callout-selfclosing.html',
        source: require('!!raw-loader!./demos/selfclosing/callout-selfclosing.html')
      },
      {
        name: 'callout-selfclosing.ts',
        source: require('!!raw-loader!./demos/selfclosing/callout-selfclosing')
      }
    ]
  },
  custom: {
    title: 'Custom callout',
    type: NgbdCalloutCustom,
    files: [
      {
        name: 'callout-custom.html',
        source: require('!!raw-loader!./demos/custom/callout-custom.html')
      },
      {
        name: 'callout-custom.ts',
        source: require('!!raw-loader!./demos/custom/callout-custom')
      }
    ]
  },
  config: {
    title: 'Global configuration of callouts',
    type: NgbdCalloutConfig,
    files: [
      {
        name: 'callout-config.html',
        source: require('!!raw-loader!./demos/config/callout-config.html')
      },
      {
        name: 'callout-config.ts',
        source: require('!!raw-loader!./demos/config/callout-config')
      }
    ]
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapper,
    children: [
      { path: 'examples', component: NgfdExamplesPage },
      { path: 'api', component: NgfdApiPage }
    ]
  }
];

@NgModule({
  imports: [
    NgfdSharedModule,
    NgfdComponentsSharedModule,
    NgbdCalloutBasicModule,
    NgbdCalloutCloseableModule,
    NgbdCalloutCustomModule,
    NgbdCalloutConfigModule,
    NgbdCalloutSelfclosingModule
  ]
})
export class NgbdCalloutModule {
  constructor(demoList: NgfdDemoList) {
    demoList.register('callout', DEMOS);
  }
}
