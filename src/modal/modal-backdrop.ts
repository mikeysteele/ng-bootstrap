import {Component, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'ngf-modal-backdrop',
  template: '<ng-content></ng-content>',
  host:
      {'[class]': '"reveal-overlay" + (backdropClass ? " " + backdropClass : "")', 'style': 'display:block'}
})
export class NgfModalBackdrop {
  @Input() backdropClass: string;
  constructor(public elementRef: ElementRef) {}
}
