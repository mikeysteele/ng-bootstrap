import {Component} from '@angular/core';
import {NgfAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-accordion-config',
  templateUrl: './accordion-config.html',
  providers: [NgfAccordionConfig] // add the NgfAccordionConfig to the component providers
})
export class NgbdAccordionConfig {
  constructor(config: NgfAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.multiExpand = true;
    config.type = 'info';
  }
}
