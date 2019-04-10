import {NgfDate} from '../ngb-date';
import {fromJSDate, NgfCalendar, NgfPeriod, toJSDate} from '../ngb-calendar';
import {Injectable} from '@angular/core';
import {isNumber} from '../../util/util';
import {
  fromGregorian,
  getDayNumberInHebrewYear,
  getDaysInHebrewMonth,
  isHebrewLeapYear,
  toGregorian,
  setHebrewDay,
  setHebrewMonth
} from './hebrew';

/**
 * @since 3.2.0
 */
@Injectable()
export class NgfCalendarHebrew extends NgfCalendar {
  getDaysPerWeek() { return 7; }

  getMonths(year?: number) {
    if (year && isHebrewLeapYear(year)) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
  }

  getWeeksPerMonth() { return 6; }

  isValid(date: NgfDate): boolean {
    let b = date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
    b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
    b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
    return b && !isNaN(toGregorian(date).getTime());
  }

  getNext(date: NgfDate, period: NgfPeriod = 'd', number = 1) {
    date = new NgfDate(date.year, date.month, date.day);

    switch (period) {
      case 'y':
        date.year += number;
        date.month = 1;
        date.day = 1;
        return date;
      case 'm':
        date = setHebrewMonth(date, number);
        date.day = 1;
        return date;
      case 'd':
        return setHebrewDay(date, number);
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
    const date = week[week.length - 1];
    return Math.ceil(getDayNumberInHebrewYear(date) / 7);
  }

  getToday(): NgfDate { return fromGregorian(new Date()); }

  /**
   * @since 3.4.0
   */
  toGregorian(date: NgfDate): NgfDate { return fromJSDate(toGregorian(date)); }

  /**
   * @since 3.4.0
   */
  fromGregorian(date: NgfDate): NgfDate { return fromGregorian(toJSDate(date)); }
}
