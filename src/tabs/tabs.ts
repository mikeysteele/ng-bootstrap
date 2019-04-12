import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  Directive,
  TemplateRef,
  AfterContentChecked,
  Output,
  EventEmitter
} from '@angular/core';
import { NgfTabsConfig } from './tabs-config';

let nextId = 0;

/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgfTab.title` input for string titles.
 */
@Directive({ selector: 'ng-template[ngfTabTitle]' })
export class NgfTabTitle {
  constructor(public templateRef: TemplateRef<any>) { }
}

/**
 * A directive to wrap content to be displayed in a tab.
 */
@Directive({ selector: 'ng-template[ngfTabContent]' })
export class NgfTabContent {
  constructor(public templateRef: TemplateRef<any>) { }
}

/**
 * A directive representing an individual tab.
 */
@Directive({ selector: 'ngf-tab' })
export class NgfTab implements AfterContentChecked {
  /**
   * The tab identifier.
   *
   * Must be unique for the entire document for proper accessibility support.
   */
  @Input() id = `ngf-tab-${nextId++}`;

  /**
   * The tab title.
   *
   * Use the [`NgfTabTitle`](#/components/tabs/api#NgfTabTitle) directive for non-string titles.
   */
  @Input() title: string;

  /**
   * If `true`, the current tab is disabled and can't be toggled.
   */
  @Input() disabled = false;

  titleTpl: NgfTabTitle | null;
  contentTpl: NgfTabContent | null;

  @ContentChildren(NgfTabTitle, { descendants: false }) titleTpls: QueryList<NgfTabTitle>;
  @ContentChildren(NgfTabContent, { descendants: false }) contentTpls: QueryList<NgfTabContent>;

  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    // Without {descendants: false} we are hitting bugs described in:
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
    this.titleTpl = this.titleTpls.first;
    this.contentTpl = this.contentTpls.first;
  }
}

/**
 * The payload of the change event fired right before the tab change.
 */
export interface NgfTabChangeEvent {
  /**
   * The id of the currently active tab.
   */
  activeId: string;

  /**
   * The id of the newly selected tab.
   */
  nextId: string;

  /**
   * Calling this function will prevent tab switching.
   */
  preventDefault: () => void;
}

/**
 * A component that makes it easy to create tabbed interface.
 */
@Component({
  selector: 'ngf-tabs',
  exportAs: 'ngfTabs',
  template: `
    <div [class]="headerWrapperClass">
    <ul [class]="'tabs ' + (orientation == 'horizontal'?  '':  orientation) + (justifyClass || '')" role="tablist">
      <li class="tabs-title" [class.is-active]="tab.id === activeId" *ngFor="let tab of tabs">
        <a [id]="tab.id" role="tab"  [class.disabled]="tab.disabled" 
          href (click)="select(tab.id); $event.preventDefault()" role="tab" [attr.tabindex]="(tab.disabled ? '-1': undefined)"
          [attr.aria-controls]="(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)"
          [attr.aria-expanded]="tab.id === activeId" [attr.aria-disabled]="tab.disabled"
          [attr.aria-selected]="tab.id === activeId">
          {{tab.title}}<ng-template [ngTemplateOutlet]="tab.titleTpl?.templateRef"></ng-template>
        </a>
      </li>
    </ul>
    </div>
    <div [class]="contentWrapperClass">
      <div class="tabs-content">
        <ng-template ngFor let-tab [ngForOf]="tabs">
          <div
            class="tabs-panel {{tab.id === activeId ? 'is-active' : ''}}"
            *ngIf="!destroyOnHide || tab.id === activeId"
            role="tabpanel"
            [attr.aria-labelledby]="tab.id" id="{{tab.id}}-panel"
            [attr.aria-expanded]="tab.id === activeId">
            <ng-template [ngTemplateOutlet]="tab.contentTpl?.templateRef"></ng-template>
          </div>
        </ng-template>
      </div>
    </div>
  `
})
export class NgfTabs implements AfterContentChecked {
  justifyClass: string;

  @ContentChildren(NgfTab) tabs: QueryList<NgfTab>;

  /**
   * The identifier of the tab that should be opened **initially**.
   *
   * For subsequent tab switches use the `.select()` method and the `(tabChange)` event.
   */
  @Input() activeId: string;

  /**
   * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
   */
  @Input() destroyOnHide = true;

  /**
   * The horizontal alignment of the tabs with flexbox utilities.
   */
  @Input()
  set justify(className: 'start' | 'center' | 'end' | 'fill' | 'justified') {
    if (!className){
      return;
    }
    if (className === 'fill' || className === 'justified') {
      this.justifyClass = `nav-${className}`;
    } else {
      this.justifyClass = ` flex-container align-${className}`;
    }
  }

  /**
   * The orientation of the tabs.
   */
  @Input() orientation: 'horizontal' | 'vertical';

  /**
   * The class to put on the header container.
   */
  @Input() headerWrapperClass: string = '';
  /**
   * The class to put on the content container.
   */
  @Input() contentWrapperClass: string = '';
  /**
   * A tab change event emitted right before the tab change happens.
   *
   * See [`NgfTabChangeEvent`](#/components/tabs/api#NgfTabChangeEvent) for payload details.
   */
  @Output() tabChange = new EventEmitter<NgfTabChangeEvent>();

  constructor(config: NgfTabsConfig) {
    this.justify = config.justify;
    this.orientation = config.orientation;
  }

  /**
   * Selects the tab with the given id and shows its associated content panel.
   *
   * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
   * hidden depending on the `destroyOnHide` value.
   */
  select(tabId: string) {
    let selectedTab = this._getTabById(tabId);
    if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
      let defaultPrevented = false;

      this.tabChange.emit(
        { activeId: this.activeId, nextId: selectedTab.id, preventDefault: () => { defaultPrevented = true; } });

      if (!defaultPrevented) {
        this.activeId = selectedTab.id;
      }
    }
  }

  ngAfterContentChecked() {
    // auto-correct activeId that might have been set incorrectly as input
    let activeTab = this._getTabById(this.activeId);
    this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
  }

  private _getTabById(id: string): NgfTab {
    let tabsWithId: NgfTab[] = this.tabs.filter(tab => tab.id === id);
    return tabsWithId.length ? tabsWithId[0] : null;
  }
}
