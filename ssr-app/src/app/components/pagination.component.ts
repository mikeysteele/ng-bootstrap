import { Component } from '@angular/core';

@Component({
  selector: 'pagination-component',
  template: `
    <ngf-pagination [collectionSize]="70" [(page)]="page" [boundaryLinks]="true"></ngf-pagination>
  `
})
export class PaginationComponent {
  page = 4;
}
