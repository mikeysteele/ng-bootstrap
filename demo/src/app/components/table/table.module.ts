import { NgModule } from '@angular/core';

import { NgfdSharedModule } from '../../shared';
import { ComponentWrapper } from '../../shared/component-wrapper/component-wrapper.component';
import { NgfdComponentsSharedModule, NgfdDemoList } from '../shared';
import { NgfdExamplesPage } from '../shared/examples-page/examples.component';
import { NgbdTableBasic } from './demos/basic/table-basic';
import { NgbdTableBasicModule } from './demos/basic/table-basic.module';
import { NgbdTableComplete } from './demos/complete/table-complete';
import { NgbdTableCompleteModule } from './demos/complete/table-complete.module';
import { NgbdTableFiltering } from './demos/filtering/table-filtering';
import { NgbdTableFilteringModule } from './demos/filtering/table-filtering.module';
import { NgbdTablePagination } from './demos/pagination/table-pagination';
import { NgbdTablePaginationModule } from './demos/pagination/table-pagination.module';
import { NgbdTableSortable } from './demos/sortable/table-sortable';
import { NgbdTableSortableModule } from './demos/sortable/table-sortable.module';
import { NgbdTableOverviewDemo } from './overview/demo/table-overview-demo.component';
import { NgbdTableOverviewComponent } from './overview/table-overview.component';

const OVERVIEW = {
  'why-not': 'Why not?',
  examples: 'Code examples'
};

const DEMOS = {
  basic: {
    title: 'Basic table',
    type: NgbdTableBasic,
    files: [
      {
        name: 'table-basic.html',
        source: require('!!raw-loader!./demos/basic/table-basic.html')
      },
      {
        name: 'table-basic.ts',
        source: require('!!raw-loader!./demos/basic/table-basic')
      }
    ]
  },
  sortable: {
    title: 'Sortable table',
    type: NgbdTableSortable,
    files: [
      {
        name: 'table-sortable.html',
        source: require('!!raw-loader!./demos/sortable/table-sortable.html')
      },
      {
        name: 'table-sortable.ts',
        source: require('!!raw-loader!./demos/sortable/table-sortable')
      }
    ]
  },
  filtering: {
    title: 'Search and filtering',
    type: NgbdTableFiltering,
    files: [
      {
        name: 'table-filtering.html',
        source: require('!!raw-loader!./demos/filtering/table-filtering.html')
      },
      {
        name: 'table-filtering.ts',
        source: require('!!raw-loader!./demos/filtering/table-filtering')
      }
    ]
  },
  pagination: {
    title: 'Pagination',
    type: NgbdTablePagination,
    files: [
      {
        name: 'table-pagination.html',
        source: require('!!raw-loader!./demos/pagination/table-pagination.html')
      },
      {
        name: 'table-pagination.ts',
        source: require('!!raw-loader!./demos/pagination/table-pagination')
      }
    ]
  },
  complete: {
    title: 'Complete example',
    type: NgbdTableComplete,
    files: [
      {
        name: 'countries.ts',
        source: require('!!raw-loader!./demos/complete/countries')
      },
      {
        name: 'country.service.ts',
        source: require('!!raw-loader!./demos/complete/country.service')
      },
      {
        name: 'country.ts',
        source: require('!!raw-loader!./demos/complete/country')
      },
      {
        name: 'table-complete.html',
        source: require('!!raw-loader!./demos/complete/table-complete.html')
      },
      {
        name: 'table-complete.ts',
        source: require('!!raw-loader!./demos/complete/table-complete')
      },
      {
        name: 'sortable.directive.ts',
        source: require('!!raw-loader!./demos/complete/sortable.directive')
      }
    ]
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  {
    path: '',
    component: ComponentWrapper,
    data: { OVERVIEW },
    children: [
      { path: 'overview', component: NgbdTableOverviewComponent },
      { path: 'examples', component: NgfdExamplesPage }
    ]
  }
];

@NgModule({
  imports: [
    NgfdSharedModule,
    NgfdComponentsSharedModule,
    NgbdTableBasicModule,
    NgbdTableSortableModule,
    NgbdTableFilteringModule,
    NgbdTablePaginationModule,
    NgbdTableCompleteModule
  ],
  declarations: [NgbdTableOverviewComponent, NgbdTableOverviewDemo]
})
export class NgbdTableModule {
  constructor(demoList: NgfdDemoList) {
    demoList.register('table', DEMOS, OVERVIEW);
  }
}
