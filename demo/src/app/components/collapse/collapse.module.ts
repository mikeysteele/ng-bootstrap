import { NgModule } from '@angular/core';

import { NgfdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgfdComponentsSharedModule, NgfdDemoList } from '../shared';
import { NgfdApiPage } from '../shared/api-page/api.component';
import { NgfdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdCollapseBasic } from './demos/basic/collapse-basic';
import { NgbdCollapseBasicModule } from './demos/basic/collapse-basic.module';

const DEMOS = {
  basic: {
    title: 'Collapse',
    type: NgbdCollapseBasic,
    code: require('!!raw-loader!./demos/basic/collapse-basic'),
    markup: require('!!raw-loader!./demos/basic/collapse-basic.html')
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
    NgbdCollapseBasicModule
  ]
})
export class NgbdCollapseModule {
  constructor(demoList: NgfdDemoList) {
    demoList.register('collapse', DEMOS);
  }
}
