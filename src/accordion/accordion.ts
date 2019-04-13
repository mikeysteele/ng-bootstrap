import {
  AfterViewInit,
  AfterContentChecked,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  forwardRef,
  Host,
  Inject,
  Input,
  Optional,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';

import {isString} from '../util/util';

import {NgfAccordionConfig} from './accordion-config';

let nextId = 0;

/**
 * The context for the [NgfPanelHeader](#/components/accordion/api#NgfPanelHeader) template
 *
 * @since 4.1.0
 */
export interface NgfPanelHeaderContext {
  /**
   * `True` if current panel is opened
   */
  opened: boolean;
}

/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgfPanelHeader`](#/components/accordion/api#NgfPanelHeader)
 *
 * @since 4.1.0
 */
@Directive({
  selector: '[ngfPanelToggle]',
  host: {
    '[class.hidden]': '!panel.isOpen',
    '[attr.aria-expanded]': 'panel.isOpen',
    '[attr.aria-controls]': 'panel.id',
    '(click)': 'accordion.toggle(panel.id)'
  }
})
export class NgfPanelToggle {
  @Input()
  set ngfPanelToggle(panel: NgfPanel) {
    if (panel) {
      this.panel = panel;
    }
  }

  constructor(
      @Inject(forwardRef(() => NgfAccordion)) public accordion: NgfAccordion,
      @Optional() @Host() @Inject(forwardRef(() => NgfPanel)) public panel: NgfPanel) {}
}

/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgfPanelToggle`](#/components/accordion/api#NgfPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgfPanelTitle`](#/components/accordion/api#NgfPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
@Directive({selector: 'ng-template[ngfPanelHeader]'})
export class NgfPanelHeader {
  constructor(public templateRef: TemplateRef<any>) {}
}

/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgfPanelHeader`](#/components/accordion/api#NgfPanelHeader) to customize the full panel header.
 */
@Directive({selector: 'ng-template[ngfPanelTitle]'})
export class NgfPanelTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}

/**
 * A directive that wraps the accordion panel content.
 */
@Directive({selector: 'ng-template[ngfPanelContent]'})
export class NgfPanelContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
@Directive({selector: 'ngf-panel'})
export class NgfPanel implements AfterContentChecked {
  /**
   *  If `true`, the panel is disabled an can't be toggled.
   */
  @Input() disabled = false;

  /**
   *  An optional id for the panel that must be unique on the page.
   *
   *  If not provided, it will be auto-generated in the `ngf-panel-xxx` format.
   */
  @Input() id = `ngf-panel-${nextId++}`;

  @Input() isOpen = false;

  /**
   *  The panel title.
   *
   *  You can alternatively use [`NgfPanelTitle`](#/components/accordion/api#NgfPanelTitle) to set panel title.
   */
  @Input() title: string;

  /**
   * Type of the current panel.
   *
   * Foundation provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
   * `'secondary'`, `'light'` and `'dark'`.
   */
  @Input() type: string;

  titleTpl: NgfPanelTitle | null;
  headerTpl: NgfPanelHeader | null;
  contentTpl: NgfPanelContent | null;

  @ContentChildren(NgfPanelTitle, {descendants: false}) titleTpls: QueryList<NgfPanelTitle>;
  @ContentChildren(NgfPanelHeader, {descendants: false}) headerTpls: QueryList<NgfPanelHeader>;
  @ContentChildren(NgfPanelContent, {descendants: false}) contentTpls: QueryList<NgfPanelContent>;

  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    // Without {descendants: false} we are hitting bugs described in:
    // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
    this.titleTpl = this.titleTpls.first;
    this.headerTpl = this.headerTpls.first;
    this.contentTpl = this.contentTpls.first;
  }
}

/**
 * An event emitted right before toggling an accordion panel.
 */
export interface NgfPanelChangeEvent {
  /**
   * The id of the accordion panel that is being toggled.
   */
  panelId: string;

  /**
   * The next state of the panel.
   *
   * `true` if it will be opened, `false` if closed.
   */
  nextState: boolean;

  /**
   * Calling this function will prevent panel toggling.
   */
  preventDefault: () => void;
}

/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
@Component({
  selector: 'ngf-accordion',
  exportAs: 'ngfAccordion',
  host: {'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': 'multiExpand'},
  template: `
    <ng-template #t ngfPanelHeader let-panel>
      <a [ngfPanelToggle]="panel">
        {{panel.title}}<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
      </a>
    </ng-template>
    <ng-template ngFor let-panel [ngForOf]="panels">
      <div class="accordion-item" [class.is-active]="panel.isOpen">
      
 
        <div role="tab" [attr.aria-expanded]="panel.isOpen" id="{{panel.id}}-header" [class]="'accordion-title ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')">
          <ng-template [ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
                       [ngTemplateOutletContext]="{$implicit: panel, opened: panel.isOpen}"></ng-template>
        </div>
        <div id="{{panel.id}}" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'"
             class="accordion-content" [ngStyle]="{display: panel.isOpen? 'block' : 'none'}" *ngIf="!destroyOnHide || panel.isOpen">
               <ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef"></ng-template>
        </div>
      </div>
    </ng-template>
  `
})
export class NgfAccordion implements AfterContentChecked, AfterViewInit {
  @ContentChildren(NgfPanel) panels: QueryList<NgfPanel>;

  /**
   * An array or comma separated strings of panel ids that should be opened **initially**.
   *
   * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
   * the `(panelChange)` event.
   */
  @Input() activeIds: string | string[] = [];

  /**
   *  If `false`, only one panel could be opened at a time.
   *
   *  Opening a new panel will close others.
   */
  @Input() multiExpand: boolean;

  /**
   *  If `false`, one panel must be opened at all times.
   *
   *  Opening a new panel will close others.
   */
  @Input() allowAllClosed: boolean;

  /**
   * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
   */
  @Input() destroyOnHide = true;

  /**
   * Type of panels.
   *
   * Foundation provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
   * `'secondary'`, `'light'` and `'dark'`.
   */
  @Input() type: string;

  /**
   * Event emitted right before the panel toggle happens.
   *
   * See [NgfPanelChangeEvent](#/components/accordion/api#NgfPanelChangeEvent) for payload details.
   */
  @Output() panelChange = new EventEmitter<NgfPanelChangeEvent>();

  constructor(config: NgfAccordionConfig) {
    this.type = config.type;
    this.multiExpand = config.multiExpand;
    this.allowAllClosed = config.allowAllClosed;
  }

  /**
   * Checks if a panel with a given id is expanded.
   */
  isExpanded(panelId: string): boolean { return this.activeIds.indexOf(panelId) > -1; }

  /**
   * Expands a panel with a given id.
   *
   * Has no effect if the panel is already expanded or disabled.
   */
  expand(panelId: string): void { this._changeOpenState(this._findPanelById(panelId), true); }

  /**
   * Expands all panels, if `[multiExpand]` is `false`.
   *
   * If `[multiExpand]` is `false`, it will expand the first panel, unless there is already a panel opened.
   */
  expandAll(): void {
    if (!this.multiExpand) {
      if (this.activeIds.length === 0 && this.panels.length) {
        this._changeOpenState(this.panels.first, true);
      }
    } else {
      this.panels.forEach(panel => this._changeOpenState(panel, true));
    }
  }

  /**
   * Hides a panel with the given id.
   *
   * Has no effect if the panel is already hidden or disabled.
   */
  hide(panelId: string) { 
      this._changeOpenState(this._findPanelById(panelId), false); }
    

  /**
   * Hides all opened panels.
   */
  hideAll() {
    this.panels.forEach((panel) => { this._changeOpenState(panel, false); });
  }

  /**
   * Toggles a panel with the given id.
   *
   * Has no effect if the panel is disabled.
   */
  toggle(panelId: string) {
    const panel = this._findPanelById(panelId);
    if (panel) {
      this._changeOpenState(panel, !panel.isOpen);
    }
  }
  ngAfterViewInit(){
    this._updateActiveIds();
  }
  ngAfterContentChecked() {
    // active id updates
    if (isString(this.activeIds)) {
      this.activeIds = this.activeIds.split(/\s*,\s*/);
    }

    // update panels open states
    this.panels.forEach(panel => {
      if (!panel.isOpen){
        panel.isOpen = (!panel.disabled && this.activeIds.indexOf(panel.id) > -1);
      }
    });

    // multiExpand updates
    if (this.activeIds.length > 1 && !this.multiExpand) {
      this._closeOthers(this.activeIds[0]);
      this._updateActiveIds();
    }
    //check one is open
    if (!this.allowAllClosed && !this.activeIds.length){
      this._changeOpenState(this.panels.first, true);
    }
  }

  private _changeOpenState(panel: NgfPanel, nextState: boolean) {
    const canClose = (this.allowAllClosed || this.activeIds.length > 1)
    if (panel && !panel.disabled && panel.isOpen !== nextState) {
      if (!nextState && !canClose){
        return;
      }
      let defaultPrevented = false;

      this.panelChange.emit(
          {panelId: panel.id, nextState: nextState, preventDefault: () => { defaultPrevented = true; }});

      if (!defaultPrevented) {
        panel.isOpen = nextState;
        
        if (nextState && !this.multiExpand) {
          this._closeOthers(panel.id);
        }
        this._updateActiveIds();
      }
    }
  }

  private _closeOthers(panelId: string) {
    this.panels.forEach(panel => {
      if (panel.id !== panelId) {
        panel.isOpen = false;
      }
    });
  }

  private _findPanelById(panelId: string): NgfPanel | null { return this.panels.find(p => p.id === panelId); }

  private _updateActiveIds() {
    this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => {
      //panel.titleTpl.expanded = panel.isOpen;
      return  panel.id
    });
  }
}
