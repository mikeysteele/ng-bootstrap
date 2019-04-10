import {Directive, Input} from '@angular/core';

/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */
@Directive({
  selector: '[ngfCollapse]',
  exportAs: 'ngfCollapse',
  host: {'[class.collapse]': 'true', '[class.hide]': 'collapsed', '[class.show]': '!collapsed'},
})
export class NgfCollapse {
  /**
   * If `true`, will collapse the element or show it otherwise.
   */
  @Input('ngfCollapse') collapsed = false;
}
