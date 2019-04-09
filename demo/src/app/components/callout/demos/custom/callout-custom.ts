import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-callout-custom',
  templateUrl: './callout-custom.html',
  styles: [`
    :host >>> .callout-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class NgbdCalloutCustom {}
