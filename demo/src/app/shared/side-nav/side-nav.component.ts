import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

export const componentsList = [
  'Accordion', 'Callout', 'Buttons', 'Carousel', 'Collapse', 'Datepicker', 'Dropdown', 'Modal', 'Pagination', 'Popover',
  'Progressbar', 'Rating', 'Table', 'Tabs', 'Timepicker', 'Tooltip', 'Typeahead'
];
export const cl = [
  {
    name: 'Controls',  
    components: [
      'Buttons',
      'Datepicker',
      'Rating'
    ]
  },
  {
    name: 'Containers',
    components: [
      'Accordion',
      'Callout',
      'Dropdown',
      'Off Canvas',
      'Reveal',
      'Table',
      'Tabs'
    ]
  },
  {
    name: 'Navigation',  
    components: [
      'Magellen',
      'Pagination'
    ]
  },
  {
    name: 'Media',  
    components: [
      'Progressbar',
      'Tooltip'
    ]
  }
]
@Component({
  selector: 'ngbd-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  components = cl;
  @Output() navigationChanged = new EventEmitter();
  constructor(private router: Router) {}

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }
  navigate(path){
    this.router.navigate(path).then(() => {
      this.navigationChanged.emit();
    })
  }
}
