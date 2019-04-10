import {TestBed} from '@angular/core/testing';

import {Component} from '@angular/core';
import {NgfDatepickerDayView} from './datepicker-day-view';
import {NgfDate} from './ngb-date';
import {NgfDatepickerI18n, NgfDatepickerI18nDefault} from './datepicker-i18n';

function getElement(element: HTMLElement): HTMLElement {
  return <HTMLElement>element.querySelector('[ngfDatepickerDayView]');
}

describe('ngfDatepickerDayView', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgfDatepickerDayView],
      providers: [{provide: NgfDatepickerI18n, useClass: NgfDatepickerI18nDefault}]
    });
  });

  it('should display date', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const el = getElement(fixture.nativeElement);
    expect(el.innerText).toBe('22');

    fixture.componentInstance.date = new NgfDate(2016, 7, 25);
    fixture.detectChanges();
    expect(el.innerText).toBe('25');
  });

  it('should apply text-muted style for disabled days', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const el = getElement(fixture.nativeElement);
    expect(el).not.toHaveCssClass('text-muted');

    fixture.componentInstance.disabled = true;
    fixture.detectChanges();
    expect(el).toHaveCssClass('text-muted');
  });

  it('should apply text-muted and outside classes for days of a different month', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const el = getElement(fixture.nativeElement);
    expect(el).not.toHaveCssClass('text-muted');
    expect(el).not.toHaveCssClass('outside');

    fixture.componentInstance.date = new NgfDate(2016, 8, 22);
    fixture.detectChanges();
    expect(el).toHaveCssClass('text-muted');
    expect(el).toHaveCssClass('outside');
  });

  it('should apply selected style', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const el = getElement(fixture.nativeElement);
    expect(el).not.toHaveCssClass('text-white');
    expect(el).not.toHaveCssClass('bg-primary');

    fixture.componentInstance.selected = true;
    fixture.detectChanges();
    expect(el).toHaveCssClass('text-white');
    expect(el).toHaveCssClass('bg-primary');
  });

  it('should not apply muted style if disabled but selected', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.componentInstance.disabled = true;
    fixture.componentInstance.selected = true;
    fixture.detectChanges();

    const el = getElement(fixture.nativeElement);
    expect(el).toHaveCssClass('bg-primary');
    expect(el).not.toHaveCssClass('text-muted');
  });
});

@Component({
  selector: 'test-cmp',
  template:
      '<div ngfDatepickerDayView [date]="date" [currentMonth]="currentMonth" [selected]="selected" [disabled]="disabled"></div>'
})
class TestComponent {
  currentMonth = 7;
  date: NgfDate = new NgfDate(2016, 7, 22);
  disabled = false;
  selected = false;
}
