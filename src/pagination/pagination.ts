import {
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { getValueInRange, isNumber } from '../util/util';
import { NgfPaginationConfig } from './pagination-config';

/**
 * A context for the
 * * `NgfPaginationFirst`
 * * `NgfPaginationPrevious`
 * * `NgfPaginationNext`
 * * `NgfPaginationLast`
 * * `NgfPaginationEllipsis`
 *
 * link templates in case you want to override one.
 *
 * @since 4.1.0
 */
export interface NgfPaginationLinkContext {
  /**
   * The currently selected page number
   */
  currentPage: number;

  /**
   * If `true`, the current link is disabled
   */
  disabled: boolean;
}

/**
 * A context for the `NgfPaginationNumber` link template in case you want to override one.
 *
 * Extends `NgfPaginationLinkContext`.
 *
 * @since 4.1.0
 */
export interface NgfPaginationNumberContext extends NgfPaginationLinkContext {
  /**
   * The page number, displayed by the current page link.
   */
  $implicit: number;
}

/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngbPaginationEllipsis]' })
export class NgfPaginationEllipsis {
  constructor(public templateRef: TemplateRef<NgfPaginationLinkContext>) { }
}

/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngbPaginationFirst]' })
export class NgfPaginationFirst {
  constructor(public templateRef: TemplateRef<NgfPaginationLinkContext>) { }
}

/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngbPaginationLast]' })
export class NgfPaginationLast {
  constructor(public templateRef: TemplateRef<NgfPaginationLinkContext>) { }
}

/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngbPaginationNext]' })
export class NgfPaginationNext {
  constructor(public templateRef: TemplateRef<NgfPaginationLinkContext>) { }
}

/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngbPaginationNumber]' })
export class NgfPaginationNumber {
  constructor(public templateRef: TemplateRef<NgfPaginationNumberContext>) { }
}

/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[ngbPaginationPrevious]' })
export class NgfPaginationPrevious {
  constructor(public templateRef: TemplateRef<NgfPaginationLinkContext>) { }
}

/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
@Component({
  selector: 'ngf-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'role': 'navigation' },
  template: `
    <ng-template #previousContainer>
    <span aria-label="Previous" i18n-aria-label="@@ngb.pagination.previous-aria"  href
          (click)="selectPage(page-1); $event.preventDefault()" [attr.tabindex]="(hasPrevious() ? null : '-1')">
          <ng-template [ngTemplateOutlet]="tplPrevious?.templateRef || previous"
                       [ngTemplateOutletContext]="{disabled: previousDisabled()}"></ng-template>
        </span>
    </ng-template>
    <ng-template #nextContainer>
      <span aria-label="Next" i18n-aria-label="@@ngb.pagination.next-aria"  href
      (click)="selectPage(page+1); $event.preventDefault()" [attr.tabindex]="(hasNext() ? null : '-1')">
      <ng-template let-page="currentPage" [ngTemplateOutlet]="tplNext?.templateRef || next"
                  [ngTemplateOutletContext]="{disabled: nextDisabled(), currentPage: page}"></ng-template>
    </span>
    </ng-template>
    <ng-template #previous let-tabindex="tabindex"><span aria-hidden="true" i18n="@@ngb.pagination.previous">previou</span></ng-template>
    <ng-template #next let-tabindex="tabindex"><span aria-hidden="true" i18n="@@ngb.pagination.next">next</span></ng-template>
    <ng-template #ellipsis>...</ng-template>
    <ng-template #defaultNumber let-page let-currentPage="currentPage">
      {{ page }}
      <span *ngIf="page === currentPage" class="show-for-sr">(current)</span>
    </ng-template>
    <ul [class]="'pagination' + (size ? ' pagination-' + size : '')">

      <li *ngIf="directionLinks" 
        [class.disabled]="previousDisabled()"  class="pagination-previous">
        <a *ngIf="!previousDisabled()">
          <ng-template [ngTemplateOutlet]="previousContainer" 
          [ngTemplateOutletContext]="{disabled: previousDisabled(), currentPage: page}"></ng-template>
        </a>
        <span *ngIf="previousDisabled()">
          <ng-template [ngTemplateOutlet]="previousContainer"
          ngTemplateOutletContext]="{disabled: previousDisabled(), currentPage: page}"></ng-template>
        </span>
      </li>
      <li *ngFor="let pageNumber of pages"  [class.current]="pageNumber === page"
        [class.disabled]="isEllipsis(pageNumber) || disabled">
        <a *ngIf="isEllipsis(pageNumber)" >
          <ng-template [ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
                       [ngTemplateOutletContext]="{disabled: true, currentPage: page}"></ng-template>
        </a>
        <span *ngIf="pageNumber === page">
        <ng-template [ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
                       [ngTemplateOutletContext]="{disabled: disabled, $implicit: pageNumber, currentPage: page}"></ng-template>
        </span>
        <a *ngIf="!isEllipsis(pageNumber) && pageNumber !== page"  href (click)="selectPage(pageNumber); $event.preventDefault()">
          <ng-template [ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
                       [ngTemplateOutletContext]="{disabled: disabled, $implicit: pageNumber, currentPage: page}"></ng-template>
        </a>
      </li>
      <li *ngIf="directionLinks"  [class.disabled]="nextDisabled()" class="pagination-next">
        <span *ngIf="nextDisabled()">
          <ng-template [ngTemplateOutlet]="nextContainer"
                       [ngTemplateOutletContext]="{disabled: nextDisabled(), currentPage: page}"></ng-template>
        </span>
        <a *ngIf="!nextDisabled()">
        <ng-template [ngTemplateOutlet]="nextContainer"
        [ngTemplateOutletContext]="{disabled: nextDisabled(), currentPage: page}"></ng-template>
        </a>
      </li>
    </ul>
  `
})
export class NgfPagination implements OnChanges {
  pageCount = 0;
  pages: number[] = [];

  @ContentChild(NgfPaginationEllipsis) tplEllipsis: NgfPaginationEllipsis;
  @ContentChild(NgfPaginationFirst) tplFirst: NgfPaginationFirst;
  @ContentChild(NgfPaginationLast) tplLast: NgfPaginationLast;
  @ContentChild(NgfPaginationNext) tplNext: NgfPaginationNext;
  @ContentChild(NgfPaginationNumber) tplNumber: NgfPaginationNumber;
  @ContentChild(NgfPaginationPrevious) tplPrevious: NgfPaginationPrevious;

  /**
   * If `true`, pagination links will be disabled.
   */
  @Input() disabled: boolean;

  /**
   * If `true`, the "First" and "Last" page links are shown.
   */
  @Input() boundaryLinks: boolean;

  /**
   * If `true`, the "Next" and "Previous" page links are shown.
   */
  @Input() directionLinks: boolean;

  /**
   * If `true`, the ellipsis symbols and first/last page numbers will be shown when `maxSize` > number of pages.
   */
  @Input() ellipses: boolean;

  /**
   * Whether to rotate pages when `maxSize` > number of pages.
   *
   * The current page always stays in the middle if `true`.
   */
  @Input() rotate: boolean;

  /**
   *  The number of items in your paginated collection.
   *
   *  Note, that this is not the number of pages. Page numbers are calculated dynamically based on
   *  `collectionSize` and `pageSize`. Ex. if you have 100 items in your collection and displaying 20 items per page,
   *  you'll end up with 5 pages.
   */
  @Input() collectionSize: number;

  /**
   *  The maximum number of pages to display.
   */
  @Input() maxSize: number;

  /**
   *  The current page.
   *
   *  Page numbers start with `1`.
   */
  @Input() page = 1;

  /**
   *  The number of items per page.
   */
  @Input() pageSize: number;

  /**
   *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
   *
   *  Event payload is the number of the newly selected page.
   *
   *  Page numbers start with `1`.
   */
  @Output() pageChange = new EventEmitter<number>(true);

  /**
   * The pagination display size.
   *
   * Foundation currently supports small and large sizes.
   */
  @Input() size: 'sm' | 'lg';

  constructor(config: NgfPaginationConfig) {
    this.disabled = config.disabled;
    this.boundaryLinks = config.boundaryLinks;
    this.directionLinks = config.directionLinks;
    this.ellipses = config.ellipses;
    this.maxSize = config.maxSize;
    this.pageSize = config.pageSize;
    this.rotate = config.rotate;
    this.size = config.size;
  }

  hasPrevious(): boolean { return this.page > 1; }

  hasNext(): boolean { return this.page < this.pageCount; }

  nextDisabled(): boolean { return !this.hasNext() || this.disabled; }

  previousDisabled(): boolean { return !this.hasPrevious() || this.disabled; }

  selectPage(pageNumber: number): void { this._updatePages(pageNumber); }

  ngOnChanges(changes: SimpleChanges): void { this._updatePages(this.page); }

  isEllipsis(pageNumber): boolean { return pageNumber === -1; }

  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  private _applyEllipses(start: number, end: number) {
    if (this.ellipses) {
      if (start > 0) {
        if (start > 1) {
          this.pages.unshift(-1);
        }
        this.pages.unshift(1);
      }
      if (end < this.pageCount) {
        if (end < (this.pageCount - 1)) {
          this.pages.push(-1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }

  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */
  private _applyRotation(): [number, number] {
    let start = 0;
    let end = this.pageCount;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

    if (this.page <= leftOffset) {
      // very beginning, no rotation -> [0..maxSize]
      end = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      // very end, no rotation -> [len-maxSize..len]
      start = this.pageCount - this.maxSize;
    } else {
      // rotate
      start = this.page - leftOffset - 1;
      end = this.page + rightOffset;
    }

    return [start, end];
  }

  /**
   * Paginates page numbers based on maxSize items per page.
   */
  private _applyPagination(): [number, number] {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start = page * this.maxSize;
    let end = start + this.maxSize;

    return [start, end];
  }

  private _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);

    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }

  private _updatePages(newPage: number) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }

    // fill-in model needed to render pages
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }

    // set page within 1..max range
    this._setPageInRange(newPage);

    // apply maxSize if necessary
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount;

      // either paginating or rotating page numbers
      if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }

      this.pages = this.pages.slice(start, end);

      // adding ellipses
      this._applyEllipses(start, end);
    }
  }
}
