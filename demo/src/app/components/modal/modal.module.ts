import { NgModule } from '@angular/core';

import { NgfdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgfdComponentsSharedModule, NgfdDemoList } from '../shared';
import { NgfdApiPage } from '../shared/api-page/api.component';
import { NgfdExamplesPage } from '../shared/examples-page/examples.component';
import { NgfdModalBasic } from './demos/basic/modal-basic';
import { NgfdModalBasicModule } from './demos/basic/modal-basic.module';
import { NgfdModalComponent } from './demos/component/modal-component';
import { NgfdModalComponentModule } from './demos/component/modal-component.module';
import { NgfdModalConfig } from './demos/config/modal-config';
import { NgfdModalConfigModule } from './demos/config/modal-config.module';
import { NgfdModalFocus } from './demos/focus/modal-focus';
import { NgfdModalFocusModule } from './demos/focus/modal-focus.module';
import { NgfdModalOptions } from './demos/options/modal-options';
import { NgfdModalOptionsModule } from './demos/options/modal-options.module';
import { NgfdModalStacked } from './demos/stacked/modal-stacked';
import { NgfdModalStackedModule } from './demos/stacked/modal-stacked.module';

const DEMOS = {
  basic: {
    title: 'Modal with default options',
    type: NgfdModalBasic,
    code: require('!!raw-loader!./demos/basic/modal-basic'),
    markup: require('!!raw-loader!./demos/basic/modal-basic.html')
  },
  component: {
    title: 'Components as content',
    type: NgfdModalComponent,
    code: require('!!raw-loader!./demos/component/modal-component'),
    markup: require('!!raw-loader!./demos/component/modal-component.html')
  },
  focus: {
    title: 'Focus management',
    type: NgfdModalFocus,
    code: require('!!raw-loader!./demos/focus/modal-focus'),
    markup: require('!!raw-loader!./demos/focus/modal-focus.html')
  },
  options: {
    title: 'Modal with options',
    type: NgfdModalOptions,
    code: require('!!raw-loader!./demos/options/modal-options'),
    markup: require('!!raw-loader!./demos/options/modal-options.html')
  },
  stacked: {
    title: 'Stacked modals',
    type: NgfdModalStacked,
    code: require('!!raw-loader!./demos/stacked/modal-stacked'),
    markup: require('!!raw-loader!./demos/stacked/modal-stacked.html')
  },
  config: {
    title: 'Global configuration of modals',
    type: NgfdModalConfig,
    code: require('!!raw-loader!./demos/config/modal-config'),
    markup: require('!!raw-loader!./demos/config/modal-config.html')
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
    NgfdModalBasicModule,
    NgfdModalComponentModule,
    NgfdModalOptionsModule,
    NgfdModalStackedModule,
    NgfdModalConfigModule,
    NgfdModalFocusModule
  ]
})
export class NgfdModalModule {
  constructor(demoList: NgfdDemoList) {
    demoList.register('modal', DEMOS);
  }
}
