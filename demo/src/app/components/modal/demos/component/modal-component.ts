import { Component, Input } from '@angular/core';
import { NgfActiveModal, NgfModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="button hollow dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgfdModalContent {
  @Input() name;

  constructor(public activeModal: NgfActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgfdModalComponent {
  constructor(private modalService: NgfModal) {}

  open() {
    const modalRef = this.modalService.open(NgfdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
