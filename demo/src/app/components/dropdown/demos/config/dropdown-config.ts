import {Component} from '@angular/core';
import {NgfDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-dropdown-config',
  templateUrl: './dropdown-config.html',
  providers: [NgfDropdownConfig] // add NgfDropdownConfig to the component providers
})
export class NgbdDropdownConfig {
  constructor(config: NgfDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'top-left';
    config.autoClose = false;
  }
}
