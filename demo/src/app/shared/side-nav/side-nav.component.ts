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
      'Button'
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
  styles: [`
    .toc{
      padding-top: 1rem;
      border-right: 1px solid #efefef;
      background: #f7f7f7;
    }
  `]
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
