import {Component} from '@angular/core';

import {NgfdDemoList} from '../../shared';
import {NgbdOverview} from '../../shared/overview';


@Component({
  selector: 'ngbd-pagination-overview',
  templateUrl: './pagination-overview.component.html',
  host: {'[class.overview]': 'true'}
})
export class NgbdPaginationOverviewComponent {
  NGFOR = `<table>
  <tr *ngFor="let item of items | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize">
    <!-- content here -->
  </tr>
</table>`;

  NGB_PAGINATION = `<ngf-pagination
  [(page)]="page"
  [pageSize]="pageSize"
  [collectionSize]="items.length"></ngf-pagination>`;

  CUSTOM_CSS = `
ngf-pagination li {
  &:first-child a {
    span {
      display: none;
    }
    &:before {
      /* provide your content here */
    }
  }
}
`;

  CUSTOM_TPL = `
<ngf-pagination>
  <ng-template ngbPaginationFirst>First</ng-template>
  <ng-template ngbPaginationLast>Last</ng-template>
  <ng-template ngbPaginationPrevious>Prev</ng-template>
  <ng-template ngbPaginationNext>Next</ng-template>
  <ng-template ngbPaginationEllipsis>...</ng-template>
  <ng-template ngbPaginationNumber let-page>{{ page }}</ng-template>
</ngf-pagination>
`;

  sections: NgbdOverview = {};

  constructor(demoList: NgfdDemoList) {
    this.sections = demoList.getOverviewSections('pagination');
  }
}
