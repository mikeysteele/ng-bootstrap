import { Injectable } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';

import { NgfModal } from './modal';

@Injectable()
export class NgfModalOpenGuard implements CanDeactivate<any> {

  constructor(private auth: NgfModal, private router: Router) {}

  public canDeactivate() {
    const hasOpen  = this.auth.hasOpenModals();
    if (hasOpen) {
        this.auth.dismissAll();
    }
    return !hasOpen;
  }
}
