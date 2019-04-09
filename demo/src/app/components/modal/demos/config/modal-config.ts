import { Component } from '@angular/core';
import { NgfModalConfig, NgfModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-config',
  templateUrl: './modal-config.html',
  // add NgfModalConfig and NgfModal to the component providers
  providers: [NgfModalConfig, NgfModal]
})
export class NgfdModalConfig {
  constructor(config: NgfModalConfig, private modalService: NgfModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}

