import { Component } from '@angular/core';

@Component({
  selector: 'timepicker-component',
  template: `
    <ngf-timepicker [(ngModel)]="time"></ngf-timepicker>
  `
})
export class TimepickerComponent {
  time = {hour: 6, minute: 5};
}
