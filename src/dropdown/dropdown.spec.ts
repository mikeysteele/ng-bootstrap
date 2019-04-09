import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {createGenericTestComponent, createKeyEvent} from '../test/common';
import {Key} from '../util/key';

import {ChangeDetectionStrategy, Component, DebugElement} from '@angular/core';

import {NgfDropdown, NgfDropdownModule} from './dropdown.module';
import {NgfDropdownConfig} from './dropdown-config';
import {By} from '@angular/platform-browser';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getDropdownEl(tc) {
  return tc.querySelector(`[ngfDropdown]`);
}

function getMenuEl(tc) {
  return tc.querySelector(`[ngfDropdownMenu]`);
}

function createFakeEscapeKeyUpEvent(): Event {
  return createKeyEvent(Key.Escape);
}

function createKeyDownEvent(key: number, target?: HTMLElement) {
  const event = {which: key, preventDefault: () => {}, stopPropagation: () => {}, target};
  spyOn(event, 'preventDefault');
  spyOn(event, 'stopPropagation');
  return event;
}

function triggerKeyDownEvent(element: DebugElement, key: number, target?: HTMLElement) {
  const event = createKeyDownEvent(key, target);
  switch (key) {
    case Key.ArrowDown:
      element.triggerEventHandler('keydown.ArrowDown', event);
      break;
    case Key.ArrowUp:
      element.triggerEventHandler('keydown.ArrowDown', event);
      break;
    case Key.Home:
      element.triggerEventHandler('keydown.Home', event);
      break;
    case Key.End:
      element.triggerEventHandler('keydown.End', event);
      break;
  }
}

function getDebugInput(element: DebugElement): DebugElement {
  return element.query(By.directive(NgfDropdown));
}

function getDebugInputs(element: DebugElement): DebugElement[] {
  return element.queryAll(By.directive(NgfDropdown));
}

const jasmineMatchers = {
  toBeShown: function(util, customEqualityTests) {
    return {
      compare: function(actual, content?, selector?) {
        const dropdownEl = getDropdownEl(actual);
        const menuEl = getMenuEl(actual);
        const isOpen = dropdownEl.classList.contains('show') && menuEl.classList.contains('show');

        return {
          pass: isOpen,
          message: `Expected ${actual.outerHTML} to have the "show class on both container and menu"`
        };
      },
      negativeCompare: function(actual) {
        const dropdownEl = getDropdownEl(actual);
        const menuEl = getMenuEl(actual);
        const isClosed = !dropdownEl.classList.contains('show') && !menuEl.classList.contains('show');

        return {
          pass: isClosed,
          message: `Expected ${actual.outerHTML} not to have the "show class both container and menu"`
        };
      }
    };
  }
};

describe('ngf-dropdown', () => {

  beforeEach(() => {
    jasmine.addMatchers(jasmineMatchers);
    TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgfDropdownModule]});
  });

  it('should be closed and down by default', () => {
    const html = `
      <div ngfDropdown>
          <button ngfDropdownAnchor></button>
          <div ngfDropdownMenu>
            <a class="dropdown-item">dropDown item</a>
            <a class="dropdown-item">dropDown item</a>
          </div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;

    expect(compiled).not.toBeShown();
  });

  it('should have dropup CSS class if placed on top', () => {
    const html = `
      <div ngfDropdown placement="top">
          <button ngfDropdownAnchor></button>
          <div ngfDropdownMenu>
            <a class="dropdown-item">dropDown item</a>
            <a class="dropdown-item">dropDown item</a>
          </div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;

    expect(getDropdownEl(compiled)).toHaveCssClass('dropup');
  });

  it('should have dropdown CSS class if placement is other than top', () => {
    const html = `
      <div ngfDropdown placement="bottom">
          <button ngfDropdownAnchor></button>
          <div ngfDropdownMenu>
            <a class="dropdown-item">dropDown item</a>
            <a class="dropdown-item">dropDown item</a>
          </div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;

    expect(getDropdownEl(compiled)).toHaveCssClass('dropdown');
  });

  it('should have x-placement attribute reflecting placement', () => {
    const html = `
      <div ngfDropdown placement="bottom-right">
          <button ngfDropdownAnchor></button>
          <div ngfDropdownMenu>
            <a class="dropdown-item">dropDown item</a>
            <a class="dropdown-item">dropDown item</a>
          </div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;

    expect(getMenuEl(compiled).getAttribute('x-placement')).toBe('bottom-right');
  });

  it('should be open initially if open expression is true', () => {
    const html = `
      <div ngfDropdown [open]="true">
          <button ngfDropdownAnchor></button>
          <div ngfDropdownMenu>
            <a class="dropdown-item">dropDown item</a>
            <a class="dropdown-item">dropDown item</a>
          </div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;

    expect(compiled).toBeShown();
  });

  it('should toggle open on "open" binding change', () => {
    const html = `
      <div ngfDropdown [open]="isOpen">
        <button ngfDropdownAnchor></button>
        <div ngfDropdownMenu></div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;

    expect(compiled).not.toBeShown();

    fixture.componentInstance.isOpen = true;
    fixture.detectChanges();
    expect(compiled).toBeShown();

    fixture.componentInstance.isOpen = false;
    fixture.detectChanges();
    expect(compiled).not.toBeShown();
  });

  it('should allow toggling dropdown from outside', () => {
    const html = `
      <button (click)="drop.open(); $event.stopPropagation()">Open</button>
      <button (click)="drop.close(); $event.stopPropagation()">Close</button>
      <button (click)="drop.toggle(); $event.stopPropagation()">Toggle</button>
      <div ngfDropdown #drop="ngfDropdown">
        <button ngfDropdownAnchor></button>
        <div ngfDropdownMenu></div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;
    let buttonEls = compiled.querySelectorAll('button');

    buttonEls[0].click();
    fixture.detectChanges();
    expect(compiled).toBeShown();

    buttonEls[1].click();
    fixture.detectChanges();
    expect(compiled).not.toBeShown();

    buttonEls[2].click();
    fixture.detectChanges();
    expect(compiled).toBeShown();

    buttonEls[2].click();
    fixture.detectChanges();
    expect(compiled).not.toBeShown();
  });

  it('should allow binding to open output', () => {
    const html = `
      <button (click)="drop.toggle(); $event.stopPropagation()">Toggle</button>
      <div ngfDropdown [(open)]="isOpen" #drop="ngfDropdown"></div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;
    let buttonEl = compiled.querySelector('button');

    expect(fixture.componentInstance.isOpen).toBe(false);

    buttonEl.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.isOpen).toBe(true);

    buttonEl.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.isOpen).toBe(false);
  });

  it('should not raise open events if open state does not change', () => {
    const html = `
      <button (click)="drop.open(); $event.stopPropagation()">Open</button>
      <button (click)="drop.close(); $event.stopPropagation()">Close</button>
      <div ngfDropdown (openChange)="recordStateChange($event)" #drop="ngfDropdown"></div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;
    let buttonEls = compiled.querySelectorAll('button');

    expect(fixture.componentInstance.isOpen).toBe(false);
    expect(fixture.componentInstance.stateChanges).toEqual([]);

    buttonEls[1].click();  // close a closed one
    fixture.detectChanges();
    expect(fixture.componentInstance.isOpen).toBe(false);
    expect(fixture.componentInstance.stateChanges).toEqual([]);

    buttonEls[0].click();  // open a closed one
    fixture.detectChanges();
    expect(fixture.componentInstance.isOpen).toBe(true);
    expect(fixture.componentInstance.stateChanges).toEqual([true]);

    buttonEls[0].click();  // open an opened one
    fixture.detectChanges();
    expect(fixture.componentInstance.isOpen).toBe(true);
    expect(fixture.componentInstance.stateChanges).toEqual([true]);

    buttonEls[1].click();  // close an opened one
    fixture.detectChanges();
    expect(fixture.componentInstance.isOpen).toBe(false);
    expect(fixture.componentInstance.stateChanges).toEqual([true, false]);
  });
});

describe('ngf-dropdown-toggle', () => {
  beforeEach(() => {
    jasmine.addMatchers(jasmineMatchers);
    TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgfDropdownModule]});
  });

  it('should toggle dropdown on click', () => {
    const html = `
      <div ngfDropdown>
          <button ngfDropdownToggle>Toggle dropdown</button>
          <div ngfDropdownMenu></div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;
    let dropdownEl = getDropdownEl(compiled);
    let buttonEl = compiled.querySelector('button');

    expect(dropdownEl).not.toHaveCssClass('show');
    expect(buttonEl.getAttribute('aria-haspopup')).toBe('true');
    expect(buttonEl.getAttribute('aria-expanded')).toBe('false');

    buttonEl.click();
    fixture.detectChanges();
    expect(compiled).toBeShown();
    expect(buttonEl.getAttribute('aria-expanded')).toBe('true');

    buttonEl.click();
    fixture.detectChanges();
    expect(compiled).not.toBeShown();
    expect(buttonEl.getAttribute('aria-expanded')).toBe('false');
  });

  it('should toggle dropdown on click of child of toggle', () => {
    const html = `
      <div ngfDropdown>
          <button ngfDropdownToggle>
            <span class="toggle">Toggle dropdown</span>
          </button>
          <div ngfDropdownMenu></div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;
    const toggleEl = compiled.querySelector('.toggle');

    expect(compiled).not.toBeShown();

    toggleEl.click();
    fixture.detectChanges();
    expect(compiled).toBeShown();

    toggleEl.click();
    fixture.detectChanges();
    expect(compiled).not.toBeShown();
  });

  it('should be appended to body', () => {
    const html = `
      <div ngfDropdown container="body">
          <button ngfDropdownToggle>
            <span class="toggle">Toggle dropdown</span>
          </button>
          <div ngfDropdownMenu></div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;
    const dropdown = fixture.debugElement.query(By.directive(NgfDropdown)).injector.get(NgfDropdown);
    dropdown.open();
    fixture.detectChanges();
    const dropdownElement = document.querySelector('div[ngfDropdownMenu]');
    const parentContainer = dropdownElement.parentNode;
    expect(parentContainer).toHaveCssClass('dropdown');
    expect(parentContainer.parentNode).toBe(document.body, 'The dropdown should be attached to the body');

  });

  it(`should second placement if the first one doesn't fit`, () => {
    const html = `
      <div ngfDropdown placement="left right">
          <button ngfDropdownToggle>
            <span class="toggle">Toggle dropdown</span>
          </button>
          <div ngfDropdownMenu>
            <a ngfDropdownItem>dropDown item</a>
            <a ngfDropdownItem>dropDown item</a>
        </div>
      </div>`;

    const fixture = createTestComponent(html);
    const compiled = fixture.nativeElement;
    const dropdown = fixture.debugElement.query(By.directive(NgfDropdown)).injector.get(NgfDropdown);
    dropdown.open();
    fixture.detectChanges();
    const dropdownEl = compiled.querySelector('[ngbdropdownmenu]');
    const targetElement = compiled.querySelector('button');
    expect(Math.round(dropdownEl.getBoundingClientRect().left))
        .toBe(Math.round(targetElement.getBoundingClientRect().right), 'Wrong dropdown placement');

  });

  describe('Custom config', () => {
    let config: NgfDropdownConfig;

    beforeEach(() => {
      TestBed.configureTestingModule({imports: [NgfDropdownModule]});
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `
      <div ngfDropdown>
          <div ngfDropdownMenu>
            <a ngfDropdownItem>dropDown item</a>
            <a ngfDropdownItem>dropDown item</a>
          </div>
      </div>`
        }
      });
    });

    beforeEach(inject([NgfDropdownConfig], (c: NgfDropdownConfig) => {
      config = c;
      config.placement = 'top-right';
    }));

    it('should initialize inputs with provided config', () => {
      const fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      const compiled = fixture.nativeElement;

      expect(getDropdownEl(compiled)).toHaveCssClass('dropup');
    });
  });

  describe('Custom config as provider', () => {
    let config = new NgfDropdownConfig();
    config.placement = 'top-right';

    beforeEach(() => {
      TestBed.configureTestingModule(
          {imports: [NgfDropdownModule], providers: [{provide: NgfDropdownConfig, useValue: config}]});
    });

    it('should initialize inputs with provided config as provider', () => {
      const fixture = createTestComponent(`
      <div ngfDropdown>
          <div ngfDropdownMenu>
            <a ngfDropdownItem>dropup item</a>
            <a ngfDropdownItem>dropup item</a>
          </div>
      </div>`);
      fixture.detectChanges();

      const compiled = fixture.nativeElement;

      expect(getDropdownEl(compiled)).toHaveCssClass('dropup');
    });
  });
});

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  isOpen = false;
  stateChanges = [];
  items = [];

  recordStateChange($event) {
    this.stateChanges.push($event);
    this.isOpen = $event;
  }
}
