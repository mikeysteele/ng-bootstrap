import {Component} from '@angular/core';
import {NgfCalendar, NgfDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-disabled',
  templateUrl: './datepicker-disabled.html'
})
export class NgbdDatepickerDisabled {

  model: NgfDateStruct;
  disabled = true;

  constructor(calendar: NgfCalendar) {
    this.model = calendar.getToday();
  }
}
