import { NgModule } from '@angular/core';
import { NgfdComponentsSharedModule, NgfdDemoList } from '../shared';
import { NgfdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgfdApiPage } from '../shared/api-page/api.component';
import { NgfdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdOffCanvasBasic } from './demos/basic/off-canvas-basic';
import { NgbdPopoverBasicModule } from './demos/basic/off-canvas-basic.module';

const DEMOS = {
  basic: {
    title: 'Setup',
    type: NgbdOffCanvasBasic,
    code: require('!!raw-loader!./demos/basic/off-canvas-basic'),
    markup: require('!!raw-loader!./demos/basic/off-canvas-basic.html')
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
    NgbdPopoverBasicModule    
  ]
})
export class NgbdOffCanvasModule {
  constructor(demoList: NgfdDemoList) {
    demoList.register('off-canvas', DEMOS);
  }
}
