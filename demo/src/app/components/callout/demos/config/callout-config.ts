import {Component, Input} from '@angular/core';
import {NgbCalloutConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-callout-config',
  templateUrl: './callout-config.html',
  // add NgbCalloutConfig  to the component providers
  providers: [NgbCalloutConfig]
})
export class NgbdCalloutConfig {
  @Input() public callouts: Array<string> = [];

  constructor(calloutConfig: NgbCalloutConfig) {
    // customize default values of callouts used by this component tree
    calloutConfig.type = 'success';
    calloutConfig.closeable = false;
  }
}
