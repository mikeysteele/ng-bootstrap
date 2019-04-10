import {Component} from '@angular/core';
import {NgfTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgfTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-timepicker-config',
  templateUrl: './timepicker-config.html',
  providers: [NgfTimepickerConfig] // add NgfTimepickerConfig to the component providers
})
export class NgbdTimepickerConfig {
  time: NgfTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(config: NgfTimepickerConfig) {
    // customize default values of ratings used by this component tree
    config.seconds = true;
    config.spinners = false;
  }
}
