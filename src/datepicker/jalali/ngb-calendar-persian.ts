import {Injectable} from '@angular/core';
import {NgfDate} from '../ngb-date';
import {NgfCalendar, NgfPeriod} from '../ngb-calendar';
import {isInteger} from '../../util/util';

import {fromGregorian, setJalaliDay, setJalaliMonth, setJalaliYear, toGregorian} from './jalali';

@Injectable()
export class NgfCalendarPersian extends NgfCalendar {
  getDaysPerWeek() { return 7; }

  getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }

  getWeeksPerMonth() { return 6; }

  getNext(date: NgfDate, period: NgfPeriod = 'd', number = 1) {
    date = new NgfDate(date.year, date.month, date.day);

    switch (period) {
      case 'y':
        date = setJalaliYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case 'm':
        date = setJalaliMonth(date, date.month + number);
        date.day = 1;
        return date;
      case 'd':
        return setJalaliDay(date, date.day + number);
      default:
        return date;
    }
  }

  getPrev(date: NgfDate, period: NgfPeriod = 'd', number = 1) { return this.getNext(date, period, -number); }

  getWeekday(date: NgfDate) {
    const day = toGregorian(date).getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    return day === 0 ? 7 : day;
  }

  getWeekNumber(week: NgfDate[], firstDayOfWeek: number) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }

    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];

    const jsDate = toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));  // Thursday
    const time = jsDate.getTime();
    const startDate = toGregorian(new NgfDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
  }

  getToday(): NgfDate { return fromGregorian(new Date()); }

  isValid(date: NgfDate): boolean {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) &&
        !isNaN(toGregorian(date).getTime());
  }
}
