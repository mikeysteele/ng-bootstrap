import { Component, ViewEncapsulation } from '@angular/core';
import { NgfModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './modal-options.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class NgfdModalOptions {
  closeResult: string;

  constructor(private modalService: NgfModal) {}

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'small' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'large' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, backdrop: false });
  }
}
