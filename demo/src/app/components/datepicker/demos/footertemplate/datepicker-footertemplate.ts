import {Component} from '@angular/core';
import {NgfCalendar, NgfDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-footertemplate',
  templateUrl: './datepicker-footertemplate.html',
})
export class NgbdDatepickerFootertemplate {
  model: NgfDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgfCalendar) {}
}
