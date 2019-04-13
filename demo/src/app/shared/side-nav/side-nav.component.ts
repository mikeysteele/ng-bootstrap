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
  styles: [`
    .toc{
      padding-top: 1rem;
      border-right: 1px solid #efefef;
      background: #f7f7f7;
      min-height: 100%;
    }
    .toc ::ng-deep .accordion-title {
      border: none;
      background: none !important;
      padding-bottom: 0.5rem;
    }
    .toc ::ng-deep .accordion-title a {
      color: black;
      font-weight: 700;

    }
    .toc ::ng-deep .accordion-content {
      border: none;
      background: none;
    }
    .toc ::ng-deep .accordion-content ul {
      list-style: none;
      margin-bottom: 0;
      margin-left: 0;
    }
    .toc ::ng-deep .accordion-content li,
    .toc ::ng-deep .accordion-title a  {
      font-size: 0.8rem;
    }
    a.is-active{
      color: #1779ba !important;
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
