import { Input, Component } from '@angular/core';

interface Callout {
  type: string;
  message: string;
}

const ALERTS: Callout[] = [{
    type: 'success',
    message: 'This is an success callout',
  }, {
    type: 'warning',
    message: 'This is a warning callout',
  }, {
    type: 'alert',
    message: 'This is a danger callout',
  }, {
    type: 'primary',
    message: 'This is a primary callout',
  }, {
    type: 'secondary',
    message: 'This is a secondary callout',
  }
];

@Component({
  selector: 'ngbd-callout-closeable',
  templateUrl: './callout-closeable.html'
})
export class NgbdCalloutCloseable {

  callouts: Callout[];

  constructor() {
    this.reset();
  }

  close(callout: Callout) {
    this.callouts.splice(this.callouts.indexOf(callout), 1);
  }

  reset() {
    this.callouts = Array.from(ALERTS);
  }
}
