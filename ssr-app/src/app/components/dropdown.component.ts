import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-component',
  template: `
    <div ngfDropdown class="d-inline-block">
      <button class="btn btn-outline-primary" id="dropdown1" ngfDropdownToggle>Toggle dropdown</button>
      <div ngfDropdownMenu aria-labelledby="dropdown1">
        <button ngfDropdownItem>Action one</button>
        <button ngfDropdownItem>Action two</button>
      </div>
    </div>
  `
})
export class DropdownComponent {
}
