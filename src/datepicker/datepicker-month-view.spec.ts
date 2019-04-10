import {TestBed, ComponentFixture} from '@angular/core/testing';
import {createGenericTestComponent, isBrowser} from '../test/common';

import {Component} from '@angular/core';

import {NgfDatepickerModule} from './datepicker.module';
import {NgfDatepickerMonthView} from './datepicker-month-view';
import {MonthViewModel} from './datepicker-view-model';
import {NgfDate} from './ngb-date';
import {NgfDatepickerDayView} from './datepicker-day-view';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getWeekdays(element: HTMLElement): HTMLElement[] {
  return <HTMLElement[]>Array.from(element.querySelectorAll('.ngb-dp-weekday'));
}

function getWeekNumbers(element: HTMLElement): HTMLElement[] {
  return <HTMLElement[]>Array.from(element.querySelectorAll('.ngb-dp-week-number'));
}

function getDates(element: HTMLElement): HTMLElement[] {
  return <HTMLElement[]>Array.from(element.querySelectorAll('.ngb-dp-day'));
}

function expectWeekdays(element: HTMLElement, weekdays: string[]) {
  const result = getWeekdays(element).map(td => td.innerText.trim());
  expect(result).toEqual(weekdays);
}

function expectWeekNumbers(element: HTMLElement, weeknumbers: string[]) {
  const result = getWeekNumbers(element).map(td => td.innerText.trim());
  expect(result).toEqual(weeknumbers);
}

function expectDates(element: HTMLElement, dates: string[]) {
  const result = getDates(element).map(td => td.innerText.trim());
  expect(result).toEqual(dates);
}

describe('ngf-datepicker-month-view', () => {

  beforeEach(() => {
    TestBed.overrideModule(NgfDatepickerModule, {set: {exports: [NgfDatepickerMonthView, NgfDatepickerDayView]}});
    TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgfDatepickerModule]});
  });

  it('should show/hide weekdays', () => {
    const fixture = createTestComponent(
        '<ngf-datepicker-month-view [month]="month" [showWeekdays]="showWeekdays"></ngf-datepicker-month-view>');

    expectWeekdays(fixture.nativeElement, ['Mo', 'Tu']);

    fixture.componentInstance.showWeekdays = false;
    fixture.detectChanges();
    expectWeekdays(fixture.nativeElement, []);
  });

  it('should show/hide week numbers', () => {
    const fixture = createTestComponent(
        '<ngf-datepicker-month-view [month]="month" [showWeekNumbers]="showWeekNumbers"></ngf-datepicker-month-view>');

    expectWeekNumbers(fixture.nativeElement, ['1', '2', '3']);

    fixture.componentInstance.showWeekNumbers = false;
    fixture.detectChanges();
    expectWeekNumbers(fixture.nativeElement, []);
  });

  it('should use custom template to display dates', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl"></ngf-datepicker-month-view>
      `);
    expectDates(fixture.nativeElement, ['', '1', '2', '3', '4', '']);
  });

  it('should use "date" as an implicit value for the template', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-d>{{ d.day }}</ng-template>
        <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl"></ngf-datepicker-month-view>
      `);
    expectDates(fixture.nativeElement, ['', '1', '2', '3', '4', '']);
  });

  it('should send date selection events', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl" (select)="onClick($event)"></ngf-datepicker-month-view>
      `);

    spyOn(fixture.componentInstance, 'onClick');

    const dates = getDates(fixture.nativeElement);
    dates[1].click();

    expect(fixture.componentInstance.onClick).toHaveBeenCalledWith(new NgfDate(2016, 8, 1));
  });

  it('should not send date selection events for hidden and disabled dates', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl" (select)="onClick($event)"></ngf-datepicker-month-view>
      `);

    spyOn(fixture.componentInstance, 'onClick');

    const dates = getDates(fixture.nativeElement);
    dates[0].click();  // hidden
    dates[2].click();  // disabled

    expect(fixture.componentInstance.onClick).not.toHaveBeenCalled();
  });

  it('should set cursor to pointer or default', () => {
    const fixture = createTestComponent(`
      <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
      <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl" (change)="onClick($event)"></ngf-datepicker-month-view>
    `);

    const dates = getDates(fixture.nativeElement);
    // hidden
    expect(window.getComputedStyle(dates[0]).getPropertyValue('cursor')).toBe('default');
    // normal
    expect(window.getComputedStyle(dates[1]).getPropertyValue('cursor')).toBe('pointer');
    // disabled
    expect(window.getComputedStyle(dates[2]).getPropertyValue('cursor')).toBe('default');
  });

  it('should apply correct CSS classes to days', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl"></ngf-datepicker-month-view>
    `);

    let dates = getDates(fixture.nativeElement);
    // hidden
    expect(dates[0]).toHaveCssClass('hidden');
    expect(dates[0]).not.toHaveCssClass('disabled');
    expect(dates[0]).not.toHaveCssClass('ngb-dp-today');
    // normal
    expect(dates[1]).not.toHaveCssClass('hidden');
    expect(dates[1]).not.toHaveCssClass('disabled');
    expect(dates[1]).not.toHaveCssClass('ngb-dp-today');
    // disabled
    expect(dates[2]).not.toHaveCssClass('hidden');
    expect(dates[2]).toHaveCssClass('disabled');
    expect(dates[2]).toHaveCssClass('ngb-dp-today');
  });

  it('should not display collapsed weeks', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl">
        </ngf-datepicker-month-view>
    `);

    expectDates(fixture.nativeElement, ['', '1', '2', '3', '4', '']);
  });

  it('should add correct aria-label attribute', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngf-datepicker-month-view [month]="month" [dayTemplate]="tpl"></ngf-datepicker-month-view>
    `);

    let dates = getDates(fixture.nativeElement);
    expect(dates[0].getAttribute('aria-label')).toBe('Monday');
  });
});

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  month: MonthViewModel = {
    firstDate: new NgfDate(2016, 8, 1),
    lastDate: new NgfDate(2016, 8, 31),
    year: 2016,
    number: 8,
    weekdays: [1, 2],
    weeks: [
      // month: 7, 8
      {
        number: 1,
        days: [
          {
            date: new NgfDate(2016, 7, 4),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 7, 4),
              date: new NgfDate(2016, 7, 4),
              disabled: false,
              focused: false,
              selected: false,
              today: false
            },
            tabindex: -1,
            ariaLabel: 'Monday',
            hidden: true
          },
          {
            date: new NgfDate(2016, 8, 1),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 8, 1),
              date: new NgfDate(2016, 8, 1),
              disabled: false,
              focused: false,
              selected: false,
              today: false
            },
            tabindex: -1,
            ariaLabel: 'Monday',
            hidden: false
          }
        ],
        collapsed: false
      },
      // month: 8, 8
      {
        number: 2,
        days: [
          {
            date: new NgfDate(2016, 8, 2),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 8, 2),
              date: new NgfDate(2016, 8, 2),
              disabled: true,
              focused: false,
              selected: false,
              today: true
            },
            tabindex: -1,
            ariaLabel: 'Friday',
            hidden: false
          },
          {
            date: new NgfDate(2016, 8, 3),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 8, 3),
              date: new NgfDate(2016, 8, 3),
              disabled: false,
              focused: false,
              selected: false,
              today: false
            },
            tabindex: -1,
            ariaLabel: 'Saturday',
            hidden: false
          }
        ],
        collapsed: false
      },
      // month: 8, 9
      {
        number: 3,
        days: [
          {
            date: new NgfDate(2016, 8, 4),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 8, 4),
              date: new NgfDate(2016, 8, 4),
              disabled: false,
              focused: false,
              selected: false,
              today: false
            },
            tabindex: -1,
            ariaLabel: 'Sunday',
            hidden: false
          },
          {
            date: new NgfDate(2016, 9, 1),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 9, 1),
              date: new NgfDate(2016, 9, 1),
              disabled: false,
              focused: false,
              selected: false,
              today: false
            },
            tabindex: -1,
            ariaLabel: 'Saturday',
            hidden: true
          }
        ],
        collapsed: false
      },
      // month: 9, 9 -> to collapse
      {
        number: 4,
        days: [
          {
            date: new NgfDate(2016, 9, 2),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 9, 2),
              date: new NgfDate(2016, 9, 2),
              disabled: false,
              focused: false,
              selected: false,
              today: false
            },
            tabindex: -1,
            ariaLabel: 'Sunday',
            hidden: true
          },
          {
            date: new NgfDate(2016, 9, 3),
            context: {
              currentMonth: 8,
              $implicit: new NgfDate(2016, 9, 3),
              date: new NgfDate(2016, 9, 3),
              disabled: false,
              focused: false,
              selected: false,
              today: false
            },
            tabindex: -1,
            ariaLabel: 'Monday',
            hidden: true
          }
        ],
        collapsed: true
      }
    ]
  };

  showWeekdays = true;
  showWeekNumbers = true;
  outsideDays = 'visible';

  onClick = () => {};
}
