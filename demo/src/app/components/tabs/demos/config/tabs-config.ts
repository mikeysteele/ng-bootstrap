import {Component} from '@angular/core';
import {NgfTabsConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tabs-config',
  templateUrl: './tabs-config.html',
  providers: [NgfTabsConfig] // add NgfTabsConfig to the component providers
})
export class NgbdTabsConfig {
  constructor(config: NgfTabsConfig) {
    // customize default values of tabss used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
}
