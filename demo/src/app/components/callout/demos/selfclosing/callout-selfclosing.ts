import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'ngbd-callout-selfclosing',
  templateUrl: './callout-selfclosing.html'
})
export class NgbdCalloutSelfclosing implements OnInit {
  private _success = new Subject<string>();

  staticCalloutClosed = false;
  successMessage: string;

  ngOnInit(): void {
    setTimeout(() => this.staticCalloutClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
}
