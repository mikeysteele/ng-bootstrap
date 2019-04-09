import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[ngbButtonLabel]',
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
  styles: ['input[type="checkbox"], input[type="radio"] { display: none;}'],
  host:
      {'[class.button]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused'}
})
export class NgbButtonLabel {
  active: boolean;
  disabled: boolean;
  focused: boolean;
}
