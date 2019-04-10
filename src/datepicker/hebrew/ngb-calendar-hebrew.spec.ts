import {NgfCalendarHebrew} from './ngb-calendar-hebrew';
import {NgfDate} from '../ngb-date';

describe('ngb-calendar-hebrew', () => {

  let calendar: NgfCalendarHebrew;

  beforeEach(() => { calendar = new NgfCalendarHebrew(); });

  it('should return number of days per week', () => { expect(calendar.getDaysPerWeek()).toBe(7); });

  it('should return number of weeks per month', () => { expect(calendar.getWeeksPerMonth()).toBe(6); });

  it('should return months of a year', () => {
    expect(calendar.getMonths(5770)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(calendar.getMonths(5771)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(calendar.getMonths(5772)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(calendar.getMonths(5773)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(calendar.getMonths(5774)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(calendar.getMonths(5775)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(calendar.getMonths(5776)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(calendar.getMonths(5777)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(calendar.getMonths(5778)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(calendar.getMonths(5779)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(calendar.getMonths(5780)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('should return day of week', () => {
    expect(calendar.getWeekday(new NgfDate(5777, 10, 8))).toEqual(7);
    expect(calendar.getWeekday(new NgfDate(5771, 4, 6))).toEqual(1);
    expect(calendar.getWeekday(new NgfDate(5779, 1, 30))).toEqual(2);
    expect(calendar.getWeekday(new NgfDate(5774, 7, 17))).toEqual(3);
    expect(calendar.getWeekday(new NgfDate(5778, 12, 5))).toEqual(4);
    expect(calendar.getWeekday(new NgfDate(5775, 3, 27))).toEqual(5);
    expect(calendar.getWeekday(new NgfDate(5774, 13, 18))).toEqual(6);
  });

  it('should add days to date', () => {
    expect(calendar.getNext(new NgfDate(5776, 2, 29))).toEqual(new NgfDate(5776, 2, 30));
    expect(calendar.getNext(new NgfDate(5777, 3, 29))).toEqual(new NgfDate(5777, 4, 1));
    expect(calendar.getNext(new NgfDate(5779, 12, 30))).toEqual(new NgfDate(5779, 13, 1));
  });

  it('should subtract days from date', () => {
    expect(calendar.getPrev(new NgfDate(5766, 1, 1))).toEqual(new NgfDate(5765, 13, 29));
    expect(calendar.getPrev(new NgfDate(5781, 4, 1))).toEqual(new NgfDate(5781, 3, 29));
    expect(calendar.getPrev(new NgfDate(5780, 3, 1))).toEqual(new NgfDate(5780, 2, 30));
  });

  it('should add months to date', () => {
    expect(calendar.getNext(new NgfDate(5778, 12, 18), 'm')).toEqual(new NgfDate(5779, 1, 1));
    expect(calendar.getNext(new NgfDate(5771, 12, 2), 'm')).toEqual(new NgfDate(5771, 13, 1));
    expect(calendar.getNext(new NgfDate(5765, 5, 26), 'm')).toEqual(new NgfDate(5765, 6, 1));
  });

  it('should subtract months from date', () => {
    expect(calendar.getPrev(new NgfDate(5779, 1, 14), 'm')).toEqual(new NgfDate(5778, 12, 1));
    expect(calendar.getPrev(new NgfDate(5772, 1, 25), 'm')).toEqual(new NgfDate(5771, 13, 1));
    expect(calendar.getPrev(new NgfDate(5765, 6, 8), 'm')).toEqual(new NgfDate(5765, 5, 1));
  });

  it('should add years to date', () => {
    expect(calendar.getNext(new NgfDate(5770, 12, 24), 'y')).toEqual(new NgfDate(5771, 1, 1));
    expect(calendar.getNext(new NgfDate(5771, 4, 11), 'y')).toEqual(new NgfDate(5772, 1, 1));
  });

  it('should subtract years from date', () => {
    expect(calendar.getPrev(new NgfDate(5777, 12, 1), 'y')).toEqual(new NgfDate(5776, 1, 1));
    expect(calendar.getPrev(new NgfDate(5779, 2, 18), 'y')).toEqual(new NgfDate(5778, 1, 1));
  });

  it('should return week number', () => {
    let week = [
      new NgfDate(5776, 13, 29), new NgfDate(5777, 1, 1), new NgfDate(5777, 1, 2), new NgfDate(5777, 1, 3),
      new NgfDate(5777, 1, 4), new NgfDate(5777, 1, 5), new NgfDate(5777, 1, 6)
    ];
    expect(calendar.getWeekNumber(week, 7)).toEqual(1);
    week = [
      new NgfDate(5777, 7, 13), new NgfDate(5777, 7, 14), new NgfDate(5777, 7, 15), new NgfDate(5777, 7, 16),
      new NgfDate(5777, 7, 17), new NgfDate(5777, 7, 18), new NgfDate(5777, 7, 19)
    ];
    expect(calendar.getWeekNumber(week, 7)).toEqual(28);
    week = [
      new NgfDate(5777, 12, 26), new NgfDate(5777, 12, 27), new NgfDate(5777, 12, 28), new NgfDate(5777, 12, 29),
      new NgfDate(5778, 1, 1), new NgfDate(5778, 1, 2), new NgfDate(5778, 1, 3)
    ];
    expect(calendar.getWeekNumber(week, 7)).toEqual(1);
  });

});
