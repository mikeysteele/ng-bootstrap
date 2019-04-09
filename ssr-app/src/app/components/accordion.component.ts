import { Component } from '@angular/core';

@Component({
  selector: 'accordion-component',
  template: `
    <ngf-accordion activeIds="ngf-panel-0">
      <ngf-panel title="Title one">
        <ng-template ngfPanelContent>Panel one</ng-template>
      </ngf-panel>
      <ngf-panel>
        <ng-template ngfPanelTitle>
          <span><b>Title</b> two</span>
        </ng-template>
        <ng-template ngfPanelContent>Panel two</ng-template>
      </ngf-panel>
      <ngf-panel title="Title three" [disabled]="true">
        <ng-template ngfPanelContent>Panel three</ng-template>
      </ngf-panel>
    </ngf-accordion>
  `
})
export class AccordionComponent {
}
