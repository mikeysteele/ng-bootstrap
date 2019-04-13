import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NgfdDemoList} from '../demo-list';

@Component({
  template: `<ng-container *ngFor="let demo of demos">
  
 
    <ngbd-widget-demo 
      ngfMagellenTarget="{{demo.id || demo.title.toLowerCase().replace(' ', '-')}}"  
      [id]="demo.id"
      [demoTitle]="demo.title"
      [code]="demo.code"
      [markup]="demo.markup"
      [component]="component"
      [files]="demo.files"
      [showCode]="demo.showCode"
    >
      <ng-template [ngComponentOutlet]="demo.type"></ng-template>
    </ngbd-widget-demo>
    </ng-container>
  `
})
export class NgfdExamplesPage {
  component: string;
  demos = [];

  constructor(route: ActivatedRoute, demoList: NgfdDemoList) {
    // We go up to parent route defining /components/:widget to read the widget name
    // This route is declared in root app.routing.ts.
    const componentName = (this.component =
      route.parent.parent.snapshot.url[1].path);
    if (componentName) {
      const demos = demoList.getDemos(componentName);
      if (demos) {
        this.demos = Object.keys(demos).map(id => {
          return { id, ...demos[id] };
        });
      }
    }
  }
}
