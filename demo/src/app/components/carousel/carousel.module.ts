import { NgModule } from '@angular/core';

import { NgfdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgfdComponentsSharedModule, NgfdDemoList } from '../shared';
import { NgfdApiPage } from '../shared/api-page/api.component';
import { NgfdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdCarouselBasic } from './demos/basic/carousel-basic';
import { NgbdCarouselBasicModule } from './demos/basic/carousel-basic.module';
import { NgbdCarouselConfig } from './demos/config/carousel-config';
import { NgbdCarouselConfigModule } from './demos/config/carousel-config.module';
import { NgbdCarouselNavigation } from './demos/navigation/carousel-navigation';
import { NgbdCarouselNavigationModule } from './demos/navigation/carousel-navigation.module';

const DEMOS = {
  basic: {
    title: 'Carousel',
    type: NgbdCarouselBasic,
    code: require('!!raw-loader!./demos/basic/carousel-basic'),
    markup: require('!!raw-loader!./demos/basic/carousel-basic.html')
  },
  navigation: {
    title: 'Navigation arrows and indicators',
    type: NgbdCarouselNavigation,
    code: require('!!raw-loader!./demos/navigation/carousel-navigation'),
    markup: require('!!raw-loader!./demos/navigation/carousel-navigation.html')
  },
  config: {
    title: 'Global configuration of carousels',
    type: NgbdCarouselConfig,
    code: require('!!raw-loader!./demos/config/carousel-config'),
    markup: require('!!raw-loader!./demos/config/carousel-config.html')
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
    NgbdCarouselBasicModule,
    NgbdCarouselConfigModule,
    NgbdCarouselNavigationModule
  ]
})
export class NgbdCarouselModule {
  constructor(demoList: NgfdDemoList) {
    demoList.register('carousel', DEMOS);
  }
}
