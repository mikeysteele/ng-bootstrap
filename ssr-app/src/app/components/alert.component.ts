import { Component } from '@angular/core';

@Component({
  selector: 'callout-component',
  template: `
    <ngb-callout [closeable]="false">Sample callout here</ngb-callout>
    <ngb-callout>Sample closeable callout here</ngb-callout>
  `
})
export class CalloutComponent {
}
