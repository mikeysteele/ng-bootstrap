import {Component} from '@angular/core';
import {NgfDatepickerConfig, NgfCalendar, NgfDate, NgfDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-config',
  templateUrl: './datepicker-config.html',
  providers: [NgfDatepickerConfig] // add NgfDatepickerConfig to the component providers
})
export class NgbdDatepickerConfig {

  model: NgfDateStruct;

  constructor(config: NgfDatepickerConfig, calendar: NgfCalendar) {
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: NgfDate) => calendar.getWeekday(date) >= 6;
  }
}
