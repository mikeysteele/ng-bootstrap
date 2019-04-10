import {Component} from '@angular/core';
import {NgfCalendar, NgfDate, NgfDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-customday',
  templateUrl: './datepicker-customday.html',
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      border-radius: 0.25rem;
      display: inline-block;
      width: 2rem;
    }
    .custom-day:hover, .custom-day.focused {
      background-color: #e6e6e6;
    }
    .weekend {
      background-color: #f0ad4e;
      border-radius: 1rem;
      color: white;
    }
    .hidden {
      display: none;
    }
  `]
})
export class NgbdDatepickerCustomday {
  model: NgfDateStruct;

  constructor(private calendar: NgfCalendar) {
  }

  isDisabled = (date: NgfDate, current: {month: number}) => date.month !== current.month;
  isWeekend = (date: NgfDate) =>  this.calendar.getWeekday(date) >= 6;
}
