import {NgfDatepickerI18n} from '../datepicker-i18n';
import {NgfDateStruct} from '../../index';
import {hebrewNumerals, isHebrewLeapYear} from './hebrew';
import {Injectable} from '@angular/core';


const WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
const MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
const MONTHS_LEAP =
    ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];

/**
 * @since 3.2.0
 */
@Injectable()
export class NgfDatepickerI18nHebrew extends NgfDatepickerI18n {
  getMonthShortName(month: number, year?: number): string { return this.getMonthFullName(month, year); }

  getMonthFullName(month: number, year?: number): string {
    return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
  }

  getWeekdayShortName(weekday: number): string { return WEEKDAYS[weekday - 1]; }

  getDayAriaLabel(date: NgfDateStruct): string {
    return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
  }

  getDayNumerals(date: NgfDateStruct): string { return hebrewNumerals(date.day); }

  getWeekNumerals(weekNumber: number): string { return hebrewNumerals(weekNumber); }

  getYearNumerals(year: number): string { return hebrewNumerals(year); }
}
