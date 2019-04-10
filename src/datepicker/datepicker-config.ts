import {Injectable, TemplateRef} from '@angular/core';
import {DayTemplateContext} from './datepicker-day-template-context';
import {NgfDateStruct} from './ngb-date-struct';

/**
 * A configuration service for the [`NgfDatepicker`](#/components/datepicker/api#NgfDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
@Injectable({providedIn: 'root'})
export class NgfDatepickerConfig {
  dayTemplate: TemplateRef<DayTemplateContext>;
  dayTemplateData: (date: NgfDateStruct, current: {year: number, month: number}) => any;
  footerTemplate: TemplateRef<any>;
  displayMonths = 1;
  firstDayOfWeek = 1;
  markDisabled: (date: NgfDateStruct, current: {year: number, month: number}) => boolean;
  minDate: NgfDateStruct;
  maxDate: NgfDateStruct;
  navigation: 'select' | 'arrows' | 'none' = 'select';
  outsideDays: 'visible' | 'collapsed' | 'hidden' = 'visible';
  showWeekdays = true;
  showWeekNumbers = false;
  startDate: {year: number, month: number};
}
