import { Component } from '@angular/core';
import { NgfActiveModal, NgfModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
      <p><button class="button large hollow primary" (click)="open()">Launch demo modal</button></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="button hollow dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgfdModal1Content {
  constructor(private modalService: NgfModal, public activeModal: NgfActiveModal) {}

  open() {
    this.modalService.open(NgfdModal2Content, {
      size: 'large'
    });
  }
}

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="button hollow dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgfdModal2Content {
  constructor(public activeModal: NgfActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-stacked',
  templateUrl: './modal-stacked.html'
})
export class NgfdModalStacked {
  constructor(private modalService: NgfModal) {}

  open() {
    this.modalService.open(NgfdModal1Content);
  }
}
