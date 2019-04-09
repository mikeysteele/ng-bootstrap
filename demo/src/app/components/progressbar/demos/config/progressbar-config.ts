import {Component} from '@angular/core';
import {NgfProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-progressbar-config',
  templateUrl: './progressbar-config.html',
  providers: [NgfProgressbarConfig] // add the NgfProgressbarConfig to the component providers
})
export class NgbdProgressbarConfig {
  constructor(config: NgfProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
}
