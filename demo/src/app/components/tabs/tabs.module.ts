import { NgModule } from '@angular/core';

import { NgfdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgfdComponentsSharedModule, NgfdDemoList } from '../shared';
import { NgfdApiPage } from '../shared/api-page/api.component';
import { NgfdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdTabsBasic } from './demos/basic/tabs-basic';
import { NgbdTabsBasicModule } from './demos/basic/tabs-basic.module';
import { NgbdTabsConfig } from './demos/config/tabs-config';
import { NgbdTabsConfigModule } from './demos/config/tabs-config.module';
import { NgbdTabsJustify } from './demos/justify/tabs-justify';
import { NgbdTabsJustifyModule } from './demos/justify/tabs-justify.module';
import { NgbdTabsOrientation } from './demos/orientation/tabs-orientation';
import { NgbdTabsOrientationModule } from './demos/orientation/tabs-orientation.module';
import { NgbdTabsPreventChangeModule } from './demos/preventchange/tabs-prevent-change.module';
import { NgbdTabsPreventchange } from './demos/preventchange/tabs-preventchange';
import { NgbdTabsSelectbyid } from './demos/selectbyid/tabs-selectbyid';
import { NgbdTabsSelectbyidModule } from './demos/selectbyid/tabs-selectbyid.module';

const DEMOS = {
  basic: {
    title: 'Tabs',
    type: NgbdTabsBasic,
    code: require('!!raw-loader!./demos/basic/tabs-basic'),
    markup: require('!!raw-loader!./demos/basic/tabs-basic.html')
  },
  selectbyid: {
    title: 'Select an active tab by id',
    type: NgbdTabsSelectbyid,
    code: require('!!raw-loader!./demos/selectbyid/tabs-selectbyid'),
    markup: require('!!raw-loader!./demos/selectbyid/tabs-selectbyid.html')
  },
  preventchange: {
    title: 'Prevent tab change',
    type: NgbdTabsPreventchange,
    code: require('!!raw-loader!./demos/preventchange/tabs-preventchange'),
    markup: require('!!raw-loader!./demos/preventchange/tabs-preventchange.html')
  },
  justify: {
    title: 'Nav justification',
    type: NgbdTabsJustify,
    code: require('!!raw-loader!./demos/justify/tabs-justify'),
    markup: require('!!raw-loader!./demos/justify/tabs-justify.html')
  },
  orientation: {
    title: 'Nav orientation',
    type: NgbdTabsOrientation,
    code: require('!!raw-loader!./demos/orientation/tabs-orientation'),
    markup: require('!!raw-loader!./demos/orientation/tabs-orientation.html')
  },
  config: {
    title: 'Global configuration of tabs',
    type: NgbdTabsConfig,
    code: require('!!raw-loader!./demos/config/tabs-config'),
    markup: require('!!raw-loader!./demos/config/tabs-config.html')
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
    NgbdTabsBasicModule,
    NgbdTabsPreventChangeModule,
    NgbdTabsSelectbyidModule,
    NgbdTabsConfigModule,
    NgbdTabsJustifyModule,
    NgbdTabsOrientationModule
  ]
})
export class NgbdTabsModule {
  constructor(demoList: NgfdDemoList) {
    demoList.register('tabs', DEMOS);
  }
}
