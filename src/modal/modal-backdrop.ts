import {Component, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'ngb-modal-backdrop',
  template: '<ng-content></ng-content>',
  host:
      {'[class]': '"reveal-overlay" + (backdropClass ? " " + backdropClass : "")', 'style': 'display:block'}
})
export class NgbModalBackdrop {
  @Input() backdropClass: string;
  constructor(public elementRef: ElementRef){}
}
