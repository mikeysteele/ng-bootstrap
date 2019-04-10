import { Component } from '@angular/core';

@Component({
  selector: 'popover-component',
  template: `
    <button type="button" class="btn hollow secondary" ngbPopover="Hello" popoverTitle="Popover">
      Click me
    </button>
  `
})
export class PopoverComponent {
}
