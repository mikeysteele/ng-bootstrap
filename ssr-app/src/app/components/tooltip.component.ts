import { Component } from '@angular/core';

@Component({
  selector: 'tooltip-component',
  template: `
    <button type="button" class="btn hollow secondary" ngbTooltip="Tooltip">
      Hover me
    </button>
  `
})
export class TooltipComponent {
}
