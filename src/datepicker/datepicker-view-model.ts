import {NgfDate} from './ngb-date';
import {NgfDateStruct} from './ngb-date-struct';
import {DayTemplateContext} from './datepicker-day-template-context';

export type NgbMarkDisabled = (date: NgfDateStruct, current: {year: number, month: number}) => boolean;
export type NgbDayTemplateData = (date: NgfDateStruct, current: {year: number, month: number}) => any;

export type DayViewModel = {
  date: NgfDate,
  context: DayTemplateContext,
  tabindex: number,
  ariaLabel: string,
  hidden: boolean
};

export type WeekViewModel = {
  number: number,
  days: DayViewModel[],
  collapsed: boolean
};

export type MonthViewModel = {
  firstDate: NgfDate,
  lastDate: NgfDate,
  number: number,
  year: number,
  weeks: WeekViewModel[],
  weekdays: number[]
};

// clang-format off
export type DatepickerViewModel = {
  dayTemplateData?: NgbDayTemplateData,
  disabled: boolean,
  displayMonths: number,
  firstDate?: NgfDate,
  firstDayOfWeek: number,
  focusDate?: NgfDate,
  focusVisible: boolean,
  lastDate?: NgfDate,
  markDisabled?: NgbMarkDisabled,
  maxDate?: NgfDate,
  minDate?: NgfDate,
  months: MonthViewModel[],
  navigation: 'select' | 'arrows' | 'none',
  outsideDays: 'visible' | 'collapsed' | 'hidden',
  prevDisabled: boolean,
  nextDisabled: boolean,
  selectBoxes: {
    years: number[],
    months: number[]
  },
  selectedDate: NgfDate
};
// clang-format on

export enum NavigationEvent {
  PREV,
  NEXT
}
