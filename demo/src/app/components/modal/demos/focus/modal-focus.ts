import { Component } from '@angular/core';
import { NgfActiveModal, NgfModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="button hollow secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="button alert" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgfdModalConfirm {
  constructor(public modal: NgfActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="button hollow secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="button alert" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgfdModalConfirmAutofocus {
  constructor(public modal: NgfActiveModal) {}
}

const MODALS = {
  focusFirst: NgfdModalConfirm,
  autofocus: NgfdModalConfirmAutofocus
};

@Component({
  selector: 'ngbd-modal-focus',
  templateUrl: './modal-focus.html'
})
export class NgfdModalFocus {
  withAutofocus = `<button type="button" ngbAutofocus class="button alert"
      (click)="modal.close('Ok click')">Ok</button>`;

  constructor(private _modalService: NgfModal) {}

  open(name: string) {
    this._modalService.open(MODALS[name]);
  }
}
