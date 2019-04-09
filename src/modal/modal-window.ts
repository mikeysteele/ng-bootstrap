import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  HostBinding
} from '@angular/core';

import { getFocusableBoundaryElements } from '../util/focus-trap';
import { ModalDismissReasons } from './modal-dismiss-reasons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngb-modal-window',
  host: {
    '[class]': '"reveal" + (windowClass ? " " + windowClass : "") + (backdrop?  "" : " without-overlay") + (size?  " "+size : "")',
    'role': 'dialog',
    'tabindex': '-1',
    '(keyup.esc)': 'escKey($event)',
    '(click)': 'backdropClick($event)',
    '[attr.aria-modal]': 'true',
    '[attr.aria-labelledby]': 'ariaLabelledBy',
    'style': 'display: block;'

  },
  template: `
      <ng-content></ng-content>
    `
})
export class NgbModalWindow implements OnInit,
  AfterViewInit, OnDestroy {
  private _elWithFocus: Element;  // element that is focused prior to modal opening
  public style = {};
  @Input() ariaLabelledBy: string;
  @Input() backdrop: boolean | string = true;
  @Input() centered: string;
  @Input() keyboard = true;
  @Input() showBackdrop = true;
  @Input() size: string;
  @Input() windowClass: string;

  @Output('dismiss') dismissEvent = new EventEmitter();

  constructor(@Inject(DOCUMENT) private _document: any, private _elRef: ElementRef<HTMLElement>, private _sanitizer: DomSanitizer) { }
  @HostBinding('style.left.px')
  public left;
  @HostBinding('style.top.px')
  public top;


  backdropClick($event): void {
    if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
      this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
    }
  }

  escKey($event): void {
    if (this.keyboard && !$event.defaultPrevented) {
      this.dismiss(ModalDismissReasons.ESC);
    }
  }

  dismiss(reason): void { this.dismissEvent.emit(reason); }

  ngOnInit() {
    this._elWithFocus = this._document.activeElement;
  }

  ngAfterViewInit() {
    if (!this._elRef.nativeElement.contains(document.activeElement)) {
      const autoFocusable = this._elRef.nativeElement.querySelector(`[ngbAutofocus]`) as HTMLElement;
      const firstFocusable = getFocusableBoundaryElements(this._elRef.nativeElement)[0];

      const elementToFocus = autoFocusable || firstFocusable || this._elRef.nativeElement;
      elementToFocus.focus();

    }
    setTimeout(() => {
      const height = this._elRef.nativeElement.offsetHeight;
      this.top = (window.innerHeight - height) / 4;
      if (!this.backdrop) {
        const width = this._elRef.nativeElement.offsetWidth;
        this.left = (window.innerWidth - width) / 2;
      }
    });
  }

  ngOnDestroy() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;

    let elementToFocus;
    if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    elementToFocus.focus();
    this._elWithFocus = null;
  }
}
