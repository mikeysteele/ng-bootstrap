import {DOCUMENT} from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  RendererFactory2,
  TemplateRef,
  ElementRef,
} from '@angular/core';
import {Subject} from 'rxjs';

import {ngbFocusTrap} from '../util/focus-trap';
import {ContentRef} from '../util/popup';
import {ScrollBar} from '../util/scrollbar';
import {isDefined, isString} from '../util/util';
import {NgfModalBackdrop} from './modal-backdrop';
import {NgfActiveModal, NgfModalRef} from './modal-ref';
import {NgfModalWindow} from './modal-window';
import { ModalDismissReasons } from './modal-dismiss-reasons';

@Injectable({providedIn: 'root'})
export class NgfModalStack {
  private _activeWindowCmptHasChanged = new Subject();
  private _ariaHiddenValues: Map<Element, string> = new Map();
  private _backdropAttributes = ['backdropClass'];
  private _modalRefs: NgfModalRef[] = [];
  private _windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'size', 'windowClass'];
  private _windowCmpts: ComponentRef<NgfModalWindow>[] = [];

  constructor(
      private _applicationRef: ApplicationRef, private _injector: Injector, @Inject(DOCUMENT) private _document: any,
      private _scrollBar: ScrollBar, private _rendererFactory: RendererFactory2) {
    // Trap focus on active WindowCmpt
    this._activeWindowCmptHasChanged.subscribe(() => {
      if (this._windowCmpts.length) {
        const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
        ngbFocusTrap(activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
        this._revertAriaHidden();
        this._setAriaHidden(activeWindowCmpt.location.nativeElement);
      }
    });
  }

  open(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, options): NgfModalRef {
    const containerEl =
        isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    const renderer = this._rendererFactory.createRenderer(null, null);

    const revertPaddingForScrollBar = this._scrollBar.compensate();
    const removeBodyClass = () => {
      if (!this._modalRefs.length) {
        renderer.removeClass(this._document.body, 'modal-open');
        this._revertAriaHidden();
      }
    };

    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
    }

    const activeModal = new NgfActiveModal();
    const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);

    let backdropCmptRef: ComponentRef<NgfModalBackdrop>  = options.backdrop ?  this._attachBackdrop(moduleCFR, containerEl) : null;
    const attachedElement = backdropCmptRef ? backdropCmptRef.instance.elementRef.nativeElement : containerEl;
    let windowCmptRef: ComponentRef<NgfModalWindow> = this._attachWindowComponent(moduleCFR, attachedElement, contentRef, options.backdrop);
    let ngbModalRef: NgfModalRef = new NgfModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

    this._registerModalRef(ngbModalRef);
    this._registerWindowCmpt(windowCmptRef);
    ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
    ngbModalRef.result.then(removeBodyClass, removeBodyClass);
    activeModal.close = (result: any) => { ngbModalRef.close(result); };
    activeModal.dismiss = (reason: any) => { ngbModalRef.dismiss(reason); };

    this._applyWindowOptions(windowCmptRef.instance, options);
    // if (this._modalRefs.length === 1) {
    //   renderer.addClass(this._document.body, 'modal-open');
    // }

    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);
      backdropCmptRef.instance.backdropClick.subscribe(() => this.dismissAll(ModalDismissReasons.BACKDROP_CLICK))
    }
    return ngbModalRef;
  }

  dismissAll(reason?: any) { this._modalRefs.forEach(ngbModalRef => ngbModalRef.dismiss(reason)); }

  hasOpenModals(): boolean { return this._modalRefs.length > 0; }

  private _attachBackdrop(moduleCFR: ComponentFactoryResolver, containerEl: any): ComponentRef<NgfModalBackdrop> {
    let backdropFactory = moduleCFR.resolveComponentFactory(NgfModalBackdrop);
    let backdropCmptRef = backdropFactory.create(this._injector);
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }

  private _attachWindowComponent(moduleCFR: ComponentFactoryResolver, attachedElementRef: HTMLElement, contentRef: any, backdrop = true):
      ComponentRef<NgfModalWindow> {
    let windowFactory = moduleCFR.resolveComponentFactory(NgfModalWindow);
    let windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
    windowCmptRef.instance.backdrop = backdrop;
    this._applicationRef.attachView(windowCmptRef.hostView);
    attachedElementRef.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }

  private _applyWindowOptions(windowInstance: NgfModalWindow, options: Object): void {
    this._windowAttributes.forEach((optionName: string) => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }

  private _applyBackdropOptions(backdropInstance: NgfModalBackdrop, options: Object): void {
    this._backdropAttributes.forEach((optionName: string) => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
  }

  private _getContentRef(
      moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any,
      activeModal: NgfActiveModal): ContentRef {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, activeModal);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(moduleCFR, contentInjector, content, activeModal);
    }
  }

  private _createFromTemplateRef(content: TemplateRef<any>, activeModal: NgfActiveModal): ContentRef {
    const context = {
      $implicit: activeModal,
      close(result) { activeModal.close(result); },
      dismiss(reason) { activeModal.dismiss(reason); }
    };
    const viewRef = content.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }

  private _createFromString(content: string): ContentRef {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }

  private _createFromComponent(
      moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any,
      context: NgfActiveModal): ContentRef {
    const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
    const modalContentInjector =
        Injector.create({providers: [{provide: NgfActiveModal, useValue: context}], parent: contentInjector});
    const componentRef = contentCmptFactory.create(modalContentInjector);
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
  }

  private _setAriaHidden(element: Element) {
    const parent = element.parentElement;
    if (parent && element !== this._document.body) {
      Array.from(parent.children).forEach(sibling => {
        if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
          this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
          sibling.setAttribute('aria-hidden', 'true');
        }
      });

      this._setAriaHidden(parent);
    }
  }

  private _revertAriaHidden() {
    this._ariaHiddenValues.forEach((value, element) => {
      if (value) {
        element.setAttribute('aria-hidden', value);
      } else {
        element.removeAttribute('aria-hidden');
      }
    });
    this._ariaHiddenValues.clear();
  }

  private _registerModalRef(ngbModalRef: NgfModalRef) {
    const unregisterModalRef = () => {
      const index = this._modalRefs.indexOf(ngbModalRef);
      if (index > -1) {
        this._modalRefs.splice(index, 1);
      }
    };
    this._modalRefs.push(ngbModalRef);
    ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
  }

  private _registerWindowCmpt(ngbWindowCmpt: ComponentRef<NgfModalWindow>) {
    this._windowCmpts.push(ngbWindowCmpt);
    this._activeWindowCmptHasChanged.next();

    ngbWindowCmpt.onDestroy(() => {
      const index = this._windowCmpts.indexOf(ngbWindowCmpt);
      if (index > -1) {
        this._windowCmpts.splice(index, 1);
        this._activeWindowCmptHasChanged.next();
      }
    });
  }
}
