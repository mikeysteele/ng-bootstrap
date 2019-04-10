import { Component, Injectable } from '@angular/core';
import {
  NgfDateStruct, NgfCalendar, NgfCalendarIslamicUmalqura, NgfDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';

const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];

@Injectable()
export class IslamicI18n extends NgfDatepickerI18n {

  getWeekdayShortName(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getDayAriaLabel(date: NgfDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'ngbd-datepicker-islamicumalqura',
  templateUrl: './datepicker-islamicumalqura.html',
  providers: [
    {provide: NgfCalendar, useClass: NgfCalendarIslamicUmalqura},
    {provide: NgfDatepickerI18n, useClass: IslamicI18n}
  ]
})
export class NgbdDatepickerIslamicumalqura {

  model: NgfDateStruct;

  constructor(private calendar: NgfCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
