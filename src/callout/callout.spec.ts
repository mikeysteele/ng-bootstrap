import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {createGenericTestComponent} from '../test/common';

import {Component} from '@angular/core';

import {NgbCalloutModule} from './callout.module';
import {NgbCallout} from './callout';
import {NgbCalloutConfig} from './callout-config';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getCalloutElement(element: HTMLElement): HTMLDivElement {
  return <HTMLDivElement>element.querySelector('.callout');
}

function getCloseButton(element: HTMLElement): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

function getCloseButtonIcon(element: HTMLElement): HTMLSpanElement {
  return <HTMLSpanElement>element.querySelector('button > span');
}

describe('ngb-callout', () => {

  beforeEach(() => { TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgbCalloutModule]}); });

  it('should initialize inputs with default values', () => {
    const defaultConfig = new NgbCalloutConfig();
    const calloutCmp = TestBed.createComponent(NgbCallout).componentInstance;
    expect(calloutCmp.closeable).toBe(defaultConfig.closeable);
    expect(calloutCmp.type).toBe(defaultConfig.type);
  });

  it('should apply those default values to the template', () => {
    const fixture = createTestComponent('<ngb-callout>Cool!</ngb-callout>');
    const calloutEl = getCalloutElement(fixture.nativeElement);

    expect(calloutEl.getAttribute('role')).toEqual('callout');
    expect(calloutEl).toHaveCssClass('callout-warning');
    expect(calloutEl).toHaveCssClass('callout-closeable');
  });

  it('should allow specifying callout type', () => {
    const fixture = createTestComponent('<ngb-callout type="success">Cool!</ngb-callout>');
    const calloutEl = getCalloutElement(fixture.nativeElement);

    expect(calloutEl.getAttribute('role')).toEqual('callout');
    expect(calloutEl).toHaveCssClass('callout-success');
  });

  it('should allow changing callout type', () => {
    const fixture = createTestComponent('<ngb-callout [type]="type">Cool!</ngb-callout>');
    const calloutEl = getCalloutElement(fixture.nativeElement);

    expect(calloutEl).toHaveCssClass('callout-success');
    expect(calloutEl).not.toHaveCssClass('callout-warning');

    fixture.componentInstance.type = 'warning';
    fixture.detectChanges();
    expect(calloutEl).not.toHaveCssClass('callout-success');
    expect(calloutEl).toHaveCssClass('callout-warning');
  });

  it('should allow adding custom CSS classes', () => {
    const fixture = createTestComponent('<ngb-callout type="success" class="myClass">Cool!</ngb-callout>');
    const calloutEl = getCalloutElement(fixture.nativeElement);

    expect(calloutEl).toHaveCssClass('callout');
    expect(calloutEl).toHaveCssClass('callout-success');
    expect(calloutEl).toHaveCssClass('myClass');
  });

  it('should render close button when closeable', () => {
    const fixture = createTestComponent('<ngb-callout [closeable]="true">Watch out!</ngb-callout>');
    const calloutEl = getCalloutElement(fixture.nativeElement);
    const buttonEl = getCloseButton(calloutEl);
    const buttonIconEl = getCloseButtonIcon(calloutEl);

    expect(calloutEl).toHaveCssClass('callout-closeable');
    expect(buttonEl).toBeTruthy();
    expect(buttonEl.getAttribute('class')).toContain('close');
    expect(buttonEl.getAttribute('aria-label')).toBe('Close');
    expect(buttonIconEl.getAttribute('aria-hidden')).toBe('true');
    expect(buttonIconEl.textContent).toBe('×');
  });

  it('should not render the close button if it is not closeable', () => {
    const fixture = createTestComponent(`<ngb-callout [closeable]="false">Don't close!</ngb-callout>`);
    const calloutEl = getCalloutElement(fixture.nativeElement);

    expect(calloutEl).not.toHaveCssClass('callout-closeable');
    expect(getCloseButton(calloutEl)).toBeFalsy();
  });

  it('should fire an event after closing a closeable callout', () => {
    const fixture =
        createTestComponent('<ngb-callout [closeable]="true" (close)="closed = true">Watch out!</ngb-callout>');
    const calloutEl = getCalloutElement(fixture.nativeElement);
    const buttonEl = getCloseButton(calloutEl);

    expect(fixture.componentInstance.closed).toBe(false);
    buttonEl.click();
    expect(fixture.componentInstance.closed).toBe(true);
  });

  it('should project the content given into the component', () => {
    const fixture = createTestComponent('<ngb-callout>Cool!</ngb-callout>');
    const calloutEl = getCalloutElement(fixture.nativeElement);

    expect(calloutEl.textContent).toContain('Cool!');
  });

  describe('Custom config', () => {
    let config: NgbCalloutConfig;

    beforeEach(() => { TestBed.configureTestingModule({imports: [NgbCalloutModule]}); });

    beforeEach(inject([NgbCalloutConfig], (c: NgbCalloutConfig) => {
      config = c;
      config.closeable = false;
      config.type = 'success';
    }));

    it('should initialize inputs with provided config', () => {
      const fixture = TestBed.createComponent(NgbCallout);
      fixture.detectChanges();

      const callout = fixture.componentInstance;
      expect(callout.closeable).toBe(config.closeable);
      expect(callout.type).toBe(config.type);
    });
  });

  describe('Custom config as provider', () => {
    let config = new NgbCalloutConfig();
    config.closeable = false;
    config.type = 'success';

    beforeEach(() => {
      TestBed.configureTestingModule(
          {imports: [NgbCalloutModule], providers: [{provide: NgbCalloutConfig, useValue: config}]});
    });

    it('should initialize inputs with provided config as provider', () => {
      const fixture = TestBed.createComponent(NgbCallout);
      fixture.detectChanges();

      const callout = fixture.componentInstance;
      expect(callout.closeable).toBe(config.closeable);
      expect(callout.type).toBe(config.type);
    });
  });
});

@Component({selector: 'test-cmp', template: '', entryComponents: [NgbCallout]})
class TestComponent {
  name = 'World';
  closed = false;
  type = 'success';
}
