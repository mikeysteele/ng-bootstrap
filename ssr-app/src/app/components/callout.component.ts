import { Component } from '@angular/core';

@Component({
  selector: 'callout-component',
  template: `
    <ngf-callout [closeable]="false">Sample callout here</ngf-callout>
    <ngf-callout>Sample closeable callout here</ngf-callout>
  `
})
export class CalloutComponent {
}
