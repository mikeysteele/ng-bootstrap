import {Component, Input} from '@angular/core';
import {NgfCalloutConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-callout-config',
  templateUrl: './callout-config.html',
  // add NgfCalloutConfig  to the component providers
  providers: [NgfCalloutConfig]
})
export class NgbdCalloutConfig {
  @Input() public callouts: Array<string> = [];

  constructor(calloutConfig: NgfCalloutConfig) {
    // customize default values of callouts used by this component tree
    calloutConfig.type = 'success';
    calloutConfig.closeable = false;
  }
}
