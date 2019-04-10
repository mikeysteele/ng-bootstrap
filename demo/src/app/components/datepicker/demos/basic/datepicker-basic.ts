import {Component} from '@angular/core';
import {NgfDateStruct, NgfCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker-basic.html'
})
export class NgbdDatepickerBasic {

  model: NgfDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgfCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
