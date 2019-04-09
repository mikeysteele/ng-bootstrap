import {Component} from '@angular/core';
import {NgfPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-pagination-config',
  templateUrl: './pagination-config.html',
  providers: [NgfPaginationConfig] // add NgfPaginationConfig to the component providers
})
export class NgbdPaginationConfig {
  page = 4;

  constructor(config: NgfPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }
}
