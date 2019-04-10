import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: '[ngfButtonLabel]',
  template: '<ng-content></ng-content>',
  styles: [`    
    :host  ::ng-deep input[type="checkbox"], 
    :host  ::ng-deep input[type="radio"] { 
      display: none;
    }

  `],
   host:
      {'[class.button]': 'true', '[class.is-active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused'}
})
export class NgfButtonLabel {
  active: boolean;  
  disabled: boolean;
  focused: boolean;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

}
