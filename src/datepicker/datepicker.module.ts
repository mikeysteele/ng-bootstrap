import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgfDatepicker} from './datepicker';
import {NgfDatepickerMonthView} from './datepicker-month-view';
import {NgfDatepickerNavigation} from './datepicker-navigation';
import {NgfInputDatepicker} from './datepicker-input';
import {NgfDatepickerDayView} from './datepicker-day-view';
import {NgfDatepickerNavigationSelect} from './datepicker-navigation-select';

export {NgfDatepicker, NgfDatepickerNavigateEvent} from './datepicker';
export {NgfInputDatepicker} from './datepicker-input';
export {NgfCalendar, NgfPeriod as NgfPeriod, NgfCalendarGregorian} from './ngb-calendar';
export {NgfCalendarIslamicCivil} from './hijri/ngb-calendar-islamic-civil';
export {NgfCalendarIslamicUmalqura} from './hijri/ngb-calendar-islamic-umalqura';
export {NgfCalendarPersian} from './jalali/ngb-calendar-persian';
export {NgfCalendarHebrew} from './hebrew/ngb-calendar-hebrew';
export {NgfDatepickerI18nHebrew} from './hebrew/datepicker-i18n-hebrew';
export {NgfDatepickerMonthView} from './datepicker-month-view';
export {NgfDatepickerDayView} from './datepicker-day-view';
export {NgfDatepickerNavigation} from './datepicker-navigation';
export {NgfDatepickerNavigationSelect} from './datepicker-navigation-select';
export {NgfDatepickerConfig} from './datepicker-config';
export {NgfDatepickerI18n} from './datepicker-i18n';
export {NgfDateStruct} from './ngb-date-struct';
export {NgfDate} from './ngb-date';
export {NgfDateAdapter} from './adapters/ngb-date-adapter';
export {NgfDateNativeAdapter} from './adapters/ngb-date-native-adapter';
export {NgfDateNativeUTCAdapter} from './adapters/ngb-date-native-utc-adapter';
export {NgfDateParserFormatter} from './ngb-date-parser-formatter';

@NgModule({
  declarations: [
    NgfDatepicker, NgfDatepickerMonthView, NgfDatepickerNavigation, NgfDatepickerNavigationSelect, NgfDatepickerDayView,
    NgfInputDatepicker
  ],
  exports: [NgfDatepicker, NgfInputDatepicker],
  imports: [CommonModule, FormsModule],
  entryComponents: [NgfDatepicker]
})
export class NgfDatepickerModule {
  /**
   * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
   * Will be removed in 4.0.0.
   *
   * @deprecated 3.0.0
   */
  static forRoot(): ModuleWithProviders { return {ngModule: NgfDatepickerModule}; }
}
