import {Component, Injectable} from '@angular/core';
import {NgfTimeStruct, NgfTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

/**
 * Example of a String Time adapter
 */
@Injectable()
export class NgfTimeStringAdapter extends NgfTimeAdapter<string> {

  fromModel(value: string): NgfTimeStruct {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgfTimeStruct): string {
    if (!time) {
      return null;
    }
    return `${this.pad(time.hour)}:${this.pad(time.minute)}:${this.pad(time.second)}`;
  }

  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
}

@Component({
  selector: 'ngbd-timepicker-adapter',
  templateUrl: './timepicker-adapter.html',
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [{provide: NgfTimeAdapter, useClass: NgfTimeStringAdapter}]
})
export class NgbdTimepickerAdapter {
  time: '13:30:00';
}
