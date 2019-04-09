import { Component } from '@angular/core';

@Component({
  selector: 'progress-component',
  template: `
    <ngf-progressbar showValue="true" type="success" [value]="50"></ngf-progressbar>
  `
})
export class ProgressComponent {
}
