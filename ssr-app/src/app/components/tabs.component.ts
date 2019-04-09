import { Component } from '@angular/core';

@Component({
  selector: 'tabs-component',
  template: `
    <ngf-tabs>
      <ngf-tab title="Tab one">
        <ng-template ngfTabContent>Content one</ng-template>
      </ngf-tab>
      <ngf-tab>
        <ng-template ngfTabTitle><b>Tab</b> two</ng-template>
        <ng-template ngfTabContent>Content two</ng-template>
      </ngf-tab>
      <ngf-tab title="Tab three" [disabled]="true">
        <ng-template ngfTabContent>Content three</ng-template>
      </ngf-tab>
    </ngf-tabs>
  `
})
export class TabsComponent {
}
