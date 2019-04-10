import {Component, Injectable} from '@angular/core';
import {NgfDateAdapter, NgfDateStruct, NgfDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-adapter',
  templateUrl: './datepicker-adapter.html',

  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [{provide: NgfDateAdapter, useClass: NgfDateNativeAdapter}]
})
export class NgbdDatepickerAdapter {

  model1: Date;
  model2: Date;

  get today() {
    return new Date();
  }
}
