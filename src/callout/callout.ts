import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

import {NgfCalloutConfig} from './callout-config';

/**
 * Callout is a component to provide contextual feedback messages for user.
 *
 * It supports several callout types and can be dismissed.
 */
@Component({
  selector: 'ngf-callout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'role': 'callout', 'class': 'callout', '[class.callout-closeable]': 'closeable'},
  template: `
    <button *ngIf="closeable" type="button" class="close" aria-label="Close" i18n-aria-label="@@ngb.callout.close"
      (click)="closeHandler()">
      <span aria-hidden="true">&times;</span>
    </button>
    <ng-content></ng-content>
    `,
  styleUrls: ['./callout.scss']
})
export class NgfCallout implements OnInit,
    OnChanges {
  /**
   * If `true`, callout can be dismissed by the user.
   *
   * The close button (×) will be displayed and you can be notified
   * of the event with the `(close)` output.
   */
  @Input() closeable: boolean;
  /**
   * Type of the callout.
   *
   * Foundation provides styles for the following types: `'success'`, `'warning'`, `'alert'`, `'primary'`,
   * `'secondary'`.
   */
  @Input() type: string;
  /**
   * An event emitted when the close button is clicked. It has no payload and only relevant for closeable callouts.
   */
  @Output() close = new EventEmitter<void>();

  constructor(config: NgfCalloutConfig, private _renderer: Renderer2, private _element: ElementRef) {
    this.closeable = config.closeable;
    this.type = config.type;
  }

  closeHandler() { this.close.emit(null); }

  ngOnChanges(changes: SimpleChanges) {
    const typeChange = changes['type'];
    if (typeChange && !typeChange.firstChange) {
      this._renderer.removeClass(this._element.nativeElement, typeChange.previousValue);
      this._renderer.addClass(this._element.nativeElement, typeChange.currentValue);
    }
  }

  ngOnInit() { this.type && this._renderer.addClass(this._element.nativeElement, this.type); }
}
