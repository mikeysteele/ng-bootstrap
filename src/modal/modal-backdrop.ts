import {Component, Input, ElementRef, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ngf-modal-backdrop',
  template: '<ng-content></ng-content>',
  host:
      {
        '[class]': '"reveal-overlay" + (backdropClass ? " " + backdropClass : "")', 'style': 'display:block',
        '(click)': 'onClick($event)'
      }
})
export class NgfModalBackdrop {
  @Input() backdropClass: string;
  @Output() backdropClick = new EventEmitter()
  constructor(public elementRef: ElementRef) {}
  onClick($event){
    if ($event.target === this.elementRef.nativeElement){
      this.backdropClick.emit()
    }
    
  }
}
