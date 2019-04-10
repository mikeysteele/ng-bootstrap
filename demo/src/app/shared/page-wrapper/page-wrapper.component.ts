import {Component, ContentChildren, Input, NgZone, QueryList} from '@angular/core';
import {NgbdPageHeaderComponent} from './page-header.component';

@Component({
  selector: 'ngbd-page-wrapper',
  templateUrl: './page-wrapper.component.html'
})
export class PageWrapper {
  @Input() pageTitle: string;

  @ContentChildren(NgbdPageHeaderComponent) private _tableOfContents: QueryList<NgbdPageHeaderComponent>;

  sidebarCollapsed = true;
  isLargeScreenOrLess: boolean;
  isSmallScreenOrLess: boolean;
  constructor(ngZone: NgZone) {
    // information extracted from https://getbootstrap.com/docs/4.1/layout/overview/
    // TODO: we should implements our own mediamatcher, according to bootstrap layout.
    const smallScreenQL = matchMedia('(max-width: 767.98px)');
    // tslint:disable-next-line:deprecationsmallScreenQL.addListener((event) => ngZone.run(() => this.sidebarCollapsed = this.isSmallScreenOrLess = event.matches));
    this.sidebarCollapsed = this.isSmallScreenOrLess = smallScreenQL.matches;
    
    const largeScreenQL = matchMedia('(max-width: 1199.98px)');
    this.isLargeScreenOrLess = largeScreenQL.matches;
    // tslint:disable-next-line:deprecation
    largeScreenQL.addListener((event) => ngZone.run(() => this.isLargeScreenOrLess = event.matches));
  }

  get tableOfContents() {
    return this._tableOfContents ? this._tableOfContents.toArray() : [];
  }
}
