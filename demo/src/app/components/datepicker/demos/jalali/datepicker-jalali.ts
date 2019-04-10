import {Component, Injectable} from '@angular/core';
import {NgfDateStruct, NgfCalendar, NgfDatepickerI18n, NgfCalendarPersian} from '@ng-bootstrap/ng-bootstrap';

const WEEKDAYS_SHORT = ['د', 'س', 'چ', 'پ', 'ج', 'ش', 'ی'];
const MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

@Injectable()
export class NgfDatepickerI18nPersian extends NgfDatepickerI18n {
  getWeekdayShortName(weekday: number) { return WEEKDAYS_SHORT[weekday - 1]; }
  getMonthShortName(month: number) { return MONTHS[month - 1]; }
  getMonthFullName(month: number) { return MONTHS[month - 1]; }
  getDayAriaLabel(date: NgfDateStruct): string { return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`; }
}

@Component({
  selector: 'ngbd-datepicker-jalali',
  templateUrl: './datepicker-jalali.html',
  providers: [
    {provide: NgfCalendar, useClass: NgfCalendarPersian},
    {provide: NgfDatepickerI18n, useClass: NgfDatepickerI18nPersian}
  ]
})
export class NgbdDatepickerJalali {

  model: NgfDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgfCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
