import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {createGenericTestComponent} from '../test/common';

import {Component} from '@angular/core';

import {NgfTabsModule} from './tabs.module';
import {NgfTabsConfig} from './tabs-config';
import {NgfTabs} from './tabs';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getTabTitles(nativeEl: HTMLElement) {
  return nativeEl.querySelectorAll('.nav-link');
}

function getTabContent(nativeEl: HTMLElement) {
  return nativeEl.querySelectorAll('.tab-content .tab-pane');
}

function expectTabs(nativeEl: HTMLElement, active: boolean[], disabled?: boolean[]) {
  const tabTitles = getTabTitles(nativeEl);
  const tabContent = getTabContent(nativeEl);
  const anyTabsActive = active.reduce((prev, curr) => prev || curr, false);

  expect(tabTitles.length).toBe(active.length);
  expect(tabContent.length).toBe(anyTabsActive ? 1 : 0);  // only 1 tab content in DOM at a time

  if (disabled) {
    expect(disabled.length).toBe(active.length);
  } else {
    disabled = new Array(active.length);  // tabs are not disabled by default
  }

  for (let i = 0; i < active.length; i++) {
    if (active[i]) {
      expect(tabTitles[i]).toHaveCssClass('active');
    } else {
      expect(tabTitles[i]).not.toHaveCssClass('active');
    }

    if (disabled[i]) {
      expect(tabTitles[i]).toHaveCssClass('disabled');
      expect(tabTitles[i].getAttribute('aria-disabled')).toBe('true');
      expect(tabTitles[i].getAttribute('tabindex')).toBe('-1');
    } else {
      expect(tabTitles[i]).not.toHaveCssClass('disabled');
      expect(tabTitles[i].getAttribute('aria-disabled')).toBe('false');
      expect(tabTitles[i].getAttribute('tabindex')).toBeNull();
    }
  }
}

function getButton(nativeEl: HTMLElement) {
  return nativeEl.querySelectorAll('button');
}

describe('ngf-tabs', () => {
  beforeEach(() => { TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgfTabsModule]}); });

  it('should initialize inputs with default values', () => {
    const defaultConfig = new NgfTabsConfig();
    const tabs = new NgfTabs(new NgfTabsConfig());
    expect(tabs.orientation).toBe(defaultConfig.orientation);
  });

  it('should render tabs and select first tab as active by default', () => {
    const fixture = createTestComponent(`
      <ngf-tabs>
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    const tabTitles = getTabTitles(fixture.nativeElement);
    const tabContent = getTabContent(fixture.nativeElement);

    expect(tabTitles[0].textContent).toMatch(/foo/);
    expect(tabTitles[1].textContent).toMatch(/bar/);
    expect(tabContent.length).toBe(1);
    expect(tabContent[0].textContent).toMatch(/Foo/);

    expectTabs(fixture.nativeElement, [true, false]);
  });

  it('should have aria attributes', () => {
    const fixture = createTestComponent(`
      <ngf-tabs>
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    const compiled: HTMLElement = fixture.nativeElement;
    const tabTitles = getTabTitles(compiled);
    const tabContent = getTabContent(compiled);

    expect(tabTitles[0].getAttribute('role')).toBe('tab');
    expect(tabTitles[0].getAttribute('aria-expanded')).toBe('true');
    expect(tabTitles[0].getAttribute('aria-controls')).toBe(tabContent[0].getAttribute('id'));

    expect(tabContent[0].getAttribute('role')).toBe('tabpanel');
    expect(tabContent[0].getAttribute('aria-expanded')).toBe('true');
    expect(tabContent[0].getAttribute('aria-labelledby')).toBe(tabTitles[0].id);

    expect(tabTitles[1].getAttribute('role')).toBe('tab');
    expect(tabTitles[1].getAttribute('aria-expanded')).toBe('false');
    expect(tabTitles[1].getAttribute('aria-controls')).toBeNull();
  });

  it('should remove aria-controls when tab content is not in DOM', () => {
    const fixture = createTestComponent(`
      <ngf-tabs [destroyOnHide]="true">
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    const compiled: HTMLElement = fixture.nativeElement;
    const tabTitles = getTabTitles(compiled);
    const tabContent = getTabContent(compiled);

    expect(tabTitles[0].getAttribute('aria-controls')).toBe(tabContent[0].getAttribute('id'));
    expect(tabContent[0].getAttribute('aria-expanded')).toBe('true');

    expect(tabTitles[1].getAttribute('aria-controls')).toBeNull();
    expect(tabContent[1]).toBeUndefined();
  });

  it('should have aria-controls and aria-expanded when tab content is hidden', () => {
    const fixture = createTestComponent(`
      <ngf-tabs [destroyOnHide]="false">
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    const compiled: HTMLElement = fixture.nativeElement;
    const tabTitles = getTabTitles(compiled);
    const tabContent = getTabContent(compiled);

    expect(tabTitles[0].getAttribute('aria-controls')).toBe(tabContent[0].id);
    expect(tabContent[0].getAttribute('aria-expanded')).toBe('true');

    expect(tabTitles[1].getAttribute('aria-controls')).toBe(tabContent[1].id);
    expect(tabContent[1].getAttribute('aria-expanded')).toBe('false');
  });

  it('should allow mix of text and HTML in tab titles', () => {
    const fixture = createTestComponent(`
      <ngf-tabs>
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab>
          <ng-template ngfTabTitle><b>bar</b></ng-template>
          <ng-template ngfTabContent>Bar</ng-template>
        </ngf-tab>
        <ngf-tab title="baz">
          <ng-template ngfTabTitle>baz</ng-template>
          <ng-template ngfTabContent>Baz</ng-template>
        </ngf-tab>
      </ngf-tabs>
    `);

    const tabTitles = getTabTitles(fixture.nativeElement);

    expect(tabTitles[0].textContent).toMatch(/foo/);
    expect(tabTitles[1].innerHTML).toMatch(/<b>bar<\/b>/);
    expect(tabTitles[2].textContent).toMatch(/bazbaz/);
  });

  it('should not pick up titles from nested tabss', () => {
    const testHtml = `
    <ngf-tabs>
      <ngf-tab title="parent">
        <ng-template ngfTabContent>
          <ngf-tabs>
            <ngf-tab>
              <ng-template ngfTabTitle>child</ng-template>
              <ng-template ngfTabContent></ng-template>
            </ngf-tab>
          </ngf-tabs>
        </ng-template>
      </ngf-tab>
    </ngf-tabs>
    `;
    const fixture = createTestComponent(testHtml);
    // additional change detection is required to reproduce the problem in the test environment
    fixture.detectChanges();

    const titles = getTabTitles(fixture.nativeElement);
    const parentTitle = titles[0].textContent.trim();
    const childTitle = titles[1].textContent.trim();

    expect(parentTitle).toContain('parent');
    expect(parentTitle).not.toContain('child');
    expect(childTitle).toContain('child');
    expect(childTitle).not.toContain('parent');
  });


  it('should not crash for empty tabss', () => {
    const fixture = createTestComponent(`<ngf-tabs activeId="2"></ngf-tabs>`);
    expectTabs(fixture.nativeElement, []);
  });

  it('should not crash for tabss with empty tab content', () => {
    const fixture = createTestComponent(`<ngf-tabs><ngf-tab></ngf-tab></ngf-tabs>`);
    expectTabs(fixture.nativeElement, [true]);
  });


  it('should mark the requested tab as active', () => {
    const fixture = createTestComponent(`
      <ngf-tabs activeId="2">
        <ngf-tab title="foo" id="1"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar" id="2"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    expectTabs(fixture.nativeElement, [false, true]);
  });


  it('should auto-correct requested active tab id', () => {
    const fixture = createTestComponent(`
      <ngf-tabs activeId="doesntExist">
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    expectTabs(fixture.nativeElement, [true, false]);
  });


  it('should auto-correct requested active tab id for undefined ids', () => {
    const fixture = createTestComponent(`
      <ngf-tabs [activeId]="activeTabId">
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    expectTabs(fixture.nativeElement, [true, false]);
  });


  it('should change active tab on tab title click', () => {
    const fixture = createTestComponent(`
      <ngf-tabs>
        <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
        <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
      </ngf-tabs>
    `);

    const tabTitles = getTabTitles(fixture.nativeElement);

    (<HTMLElement>tabTitles[1]).click();
    fixture.detectChanges();
    expectTabs(fixture.nativeElement, [false, true]);

    (<HTMLElement>tabTitles[0]).click();
    fixture.detectChanges();
    expectTabs(fixture.nativeElement, [true, false]);
  });


  it('should support disabled tabs', () => {
    const fixture = createTestComponent(`
         <ngf-tabs>
           <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
           <ngf-tab title="bar" [disabled]="true"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expectTabs(fixture.nativeElement, [true, false], [false, true]);
  });


  it('should not change active tab on disabled tab title click', () => {
    const fixture = createTestComponent(`
         <ngf-tabs>
           <ngf-tab title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
           <ngf-tab title="bar" [disabled]="true"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expectTabs(fixture.nativeElement, [true, false], [false, true]);

    (<HTMLElement>getTabTitles(fixture.nativeElement)[1]).click();
    fixture.detectChanges();
    expectTabs(fixture.nativeElement, [true, false], [false, true]);
  });


  it('should allow initially active and disabled tabs', () => {
    const fixture = createTestComponent(`
         <ngf-tabs>
           <ngf-tab title="bar" [disabled]="true"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expectTabs(fixture.nativeElement, [true], [true]);
  });


  it('should have nav-tabs default', () => {
    const fixture = createTestComponent(`
         <ngf-tabs>
           <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('nav-tabs');
    expect(fixture.nativeElement.querySelector('ul')).not.toHaveCssClass('nav-pills');
  });


  it('should have pills upon setting pills', () => {
    const fixture = createTestComponent(`
         <ngf-tabs type="pills">
           <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('nav-pills');
    expect(fixture.nativeElement.querySelector('ul')).not.toHaveCssClass('nav-tabs');
  });

  it('should allow arbitrary nav type', () => {
    const fixture = createTestComponent(`
         <ngf-tabs type="bordered">
           <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('nav-bordered');
    expect(fixture.nativeElement.querySelector('ul')).not.toHaveCssClass('nav-pills');
    expect(fixture.nativeElement.querySelector('ul')).not.toHaveCssClass('nav-tabs');
  });

  it('should have the "justify-content-start" class by default', () => {
    const fixture = createTestComponent(`
         <ngf-tabs>
           <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('justify-content-start');
  });

  it('should have the "justify-content-center" class upon setting justify to center', () => {
    const fixture = createTestComponent(`
         <ngf-tabs justify="center">
           <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('justify-content-center');
  });

  it('should have the "justify-content-end" upon setting justify to end', () => {
    const fixture = createTestComponent(`
         <ngf-tabs justify="end">
           <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
         </ngf-tabs>
       `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('justify-content-end');
  });

  it('should have the "nav-fill" class upon setting justify to fill', () => {
    const fixture = createTestComponent(`
        <ngf-tabs justify="fill">
          <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
        </ngf-tabs>
      `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('nav-fill');
  });

  it('should have the "nav-justified" class upon setting justify to justified', () => {
    const fixture = createTestComponent(`
        <ngf-tabs justify="justified">
          <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
        </ngf-tabs>
      `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('nav-justified');
  });

  it('should have the "justify-content-start" class upon setting orientation to horizontal', () => {
    const fixture = createTestComponent(`
        <ngf-tabs orientation="horizontal">
          <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
        </ngf-tabs>
      `);

    expect(fixture.nativeElement.querySelector('ul')).not.toHaveCssClass('flex-column');
    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('justify-content-start');
  });

  it('should have the "flex-column" class upon setting orientation to vertical', () => {
    const fixture = createTestComponent(`
        <ngf-tabs orientation="vertical">
          <ngf-tab title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
        </ngf-tabs>
      `);

    expect(fixture.nativeElement.querySelector('ul')).toHaveCssClass('flex-column');
    expect(fixture.nativeElement.querySelector('ul')).not.toHaveCssClass('justify-content-start');
  });


  it('should change active tab by calling select on an exported directive instance', () => {
    const fixture = createTestComponent(`
          <ngf-tabs #myTabSet="ngfTabs">
            <ngf-tab id="myFirstTab" title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
            <ngf-tab id="mySecondTab" title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
          </ngf-tabs>
          <button (click)="myTabSet.select('myFirstTab')">Select the first Tab</button>
          <button (click)="myTabSet.select('mySecondTab')">Select the second Tab</button>
        `);

    const button = getButton(fixture.nativeElement);

    // Click on a button to select the second tab
    (<HTMLElement>button[1]).click();
    fixture.detectChanges();
    expectTabs(fixture.nativeElement, [false, true]);

    // Click on a button to select the first tab
    (<HTMLElement>button[0]).click();
    fixture.detectChanges();
    expectTabs(fixture.nativeElement, [true, false]);
  });


  it('should not change active tab by calling select on an exported directive instance in case of disable tab', () => {
    const fixture = createTestComponent(`
          <ngf-tabs #myTabSet="ngfTabs">
            <ngf-tab id="myFirstTab" title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
            <ngf-tab id="mySecondTab" title="bar" [disabled]="true"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
          </ngf-tabs>
          <button (click)="myTabSet.select('mySecondTab')">Select the second Tab</button>
        `);

    const button = getButton(fixture.nativeElement);

    // Click on a button to select the second disabled tab (should not change active tab).
    (<HTMLElement>button[0]).click();
    fixture.detectChanges();
    expectTabs(fixture.nativeElement, [true, false], [false, true]);
  });

  it('should not remove inactive tabs content from DOM with `destroyOnHide` flag', () => {
    const fixture = createTestComponent(`
          <ngf-tabs #myTabSet="ngfTabs" [destroyOnHide]="false">
            <ngf-tab id="myFirstTab" title="foo"><ng-template ngfTabContent>Foo</ng-template></ngf-tab>
            <ngf-tab id="mySecondTab" title="bar"><ng-template ngfTabContent>Bar</ng-template></ngf-tab>
          </ngf-tabs>
          <button (click)="myTabSet.select('mySecondTab')">Select the second Tab</button>
        `);

    const button = getButton(fixture.nativeElement);

    // Click on a button to select the second tab
    (<HTMLElement>button[0]).click();
    fixture.detectChanges();
    let tabContents = getTabContent(fixture.nativeElement);
    expect(tabContents.length).toBe(2);
    expect(tabContents[1]).toHaveCssClass('active');
  });

  it('should emit tab change event when switching tabs', () => {
    const fixture = createTestComponent(`
          <ngf-tabs #myTabSet="ngfTabs" (tabChange)="changeCallback($event)">
            <ngf-tab id="first" title="first"><ng-template ngfTabContent>First</ng-template></ngf-tab>
            <ngf-tab id="second" title="second"><ng-template ngfTabContent>Second</ng-template></ngf-tab>
          </ngf-tabs>
          <button (click)="myTabSet.select('first')">Select the first Tab</button>
          <button (click)="myTabSet.select('second')">Select the second Tab</button>
        `);

    const button = getButton(fixture.nativeElement);

    spyOn(fixture.componentInstance, 'changeCallback');

    // Select the second tab -> change event
    (<HTMLElement>button[1]).click();
    fixture.detectChanges();
    expect(fixture.componentInstance.changeCallback)
        .toHaveBeenCalledWith(jasmine.objectContaining({activeId: 'first', nextId: 'second'}));

    // Select the first tab again -> change event
    (<HTMLElement>button[0]).click();
    fixture.detectChanges();
    expect(fixture.componentInstance.changeCallback)
        .toHaveBeenCalledWith(jasmine.objectContaining({activeId: 'second', nextId: 'first'}));
  });

  it('should not emit tab change event when selecting currently active and disabled tabs', () => {
    const fixture = createTestComponent(`
          <ngf-tabs #myTabSet="ngfTabs" (tabChange)="changeCallback($event)">
            <ngf-tab id="first" title="first"><ng-template ngfTabContent>First</ng-template></ngf-tab>
            <ngf-tab id="second" title="second" [disabled]="true"><ng-template ngfTabContent>Second</ng-template></ngf-tab>
          </ngf-tabs>
          <button (click)="myTabSet.select('first')">Select the first Tab</button>
          <button (click)="myTabSet.select('second')">Select the second Tab</button>
        `);

    const button = getButton(fixture.nativeElement);

    spyOn(fixture.componentInstance, 'changeCallback');

    // Select the currently active tab -> no change event
    (<HTMLElement>button[0]).click();
    fixture.detectChanges();
    expect(fixture.componentInstance.changeCallback).not.toHaveBeenCalled();

    // Select the disabled tab -> no change event
    (<HTMLElement>button[1]).click();
    fixture.detectChanges();
    expect(fixture.componentInstance.changeCallback).not.toHaveBeenCalled();
  });

  it('should cancel tab change when preventDefault() is called', () => {
    const fixture = createTestComponent(`
          <ngf-tabs #myTabSet="ngfTabs" (tabChange)="changeCallback($event)">
            <ngf-tab id="first" title="first"><ng-template ngfTabContent>First</ng-template></ngf-tab>
            <ngf-tab id="second" title="second"><ng-template ngfTabContent>Second</ng-template></ngf-tab>
          </ngf-tabs>
          <button (click)="myTabSet.select('first')">Select the first Tab</button>
          <button (click)="myTabSet.select('second')">Select the second Tab</button>
        `);

    const button = getButton(fixture.nativeElement);

    let changeEvent = null;
    fixture.componentInstance.changeCallback = (event) => {
      changeEvent = event;
      event.preventDefault();
    };

    // Select the second tab -> selection will be canceled
    (<HTMLElement>button[1]).click();
    fixture.detectChanges();
    expect(changeEvent).toEqual(jasmine.objectContaining({activeId: 'first', nextId: 'second'}));
    expectTabs(fixture.nativeElement, [true, false]);
  });

  describe('Custom config', () => {
    let config: NgfTabsConfig;

    beforeEach(() => { TestBed.configureTestingModule({imports: [NgfTabsModule]}); });

    beforeEach(inject([NgfTabsConfig], (c: NgfTabsConfig) => {
      config = c;
      config.orientation = 'horizontal';
    }));

    it('should initialize inputs with provided config', () => {
      const fixture = TestBed.createComponent(NgfTabs);
      fixture.detectChanges();

      let tabs = fixture.componentInstance;
      expect(tabs.orientation).toBe(config.orientation);
    });
  });

  describe('Custom config as provider', () => {
    let config = new NgfTabsConfig();
    config.orientation = 'horizontal';

    beforeEach(() => {
      TestBed.configureTestingModule(
          {imports: [NgfTabsModule], providers: [{provide: NgfTabsConfig, useValue: config}]});
    });

    it('should initialize inputs with provided config as provider', () => {
      const fixture = TestBed.createComponent(NgfTabs);
      fixture.detectChanges();

      let tabs = fixture.componentInstance;
      expect(tabs.orientation).toBe(config.orientation);
    });
  });
});

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  activeTabId: string;
  changeCallback = (event: any) => {};
}
