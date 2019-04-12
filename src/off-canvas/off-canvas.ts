import {
    AfterContentChecked,
    AfterViewInit,
    ContentChildren,
    Directive,
    EventEmitter,
    forwardRef,
    ChangeDetectorRef,
    Inject,
    Input,
    Renderer2,
    Output,
    QueryList,
    TemplateRef,
    HostListener,
    ContentChild
  } from '@angular/core';
  
  @Directive({
    selector: '[ngfOffCanvas]',
    host: {
      '[class.off-canvas]': 'true',
      '[class.is-open]': 'true',
      '[class.is-closed]': '!true',
      '[class.placement-left]': 'placement === "left"',
      '[class.placement-top]': 'placement === "top"',
      '[class.placement-right]': 'placement === "right"',
      '[class.placement-bottom]': 'placement === "bottom"',
      '[style.position]': 'absolute ?  "absolute": ""'
    }
  })
  export class NgfOffCanvas{
    @Input() placement: 'left' | 'right' | 'top' | 'bottom';
    @Input() absolute = false;
    @Input() transition: 'push' | 'overlap' = 'push';

    @Input() isOpen = false;
    @Input('ngfOffCanvas') id

    constructor() {
    
    }
  }
  @Directive({
    selector: '[ngfOffCanvasContent]',
    host: {
      '[class.off-canvas-content]': 'true',     
      '[class.is-open-left]': 'leftOpen',
      '[class.has-position-left]': 'leftOpen',      
      '[class.is-open-right]': 'rightOpen',      
      '[class.is-open-top]': 'topOpen',
      '[class.is-open-bottom]': 'bottomOpen',
      '[class.has-transition-push]': 'isOpen && transition === "push"',
      '[class.has-transition-overlay]': 'isOpen && transition === "overlap"'
    }
  })
  export class NgfOffCanvasContent{
    public leftOpen = false;
    public rightOpen = false;
    public topOpen = false;
    public bottomOpen = false;
    public transition: string
    public get isOpen(){
      return this.leftOpen || this.rightOpen || this.topOpen || this.bottomOpen;
    }
    constructor(private cdr: ChangeDetectorRef) {

    }
    public setActiveCanvas(e: NgfOffCanvas){
      this[e.placement+'Open'] = e.isOpen;
      this.transition = e.transition
      this.cdr.detectChanges();
    }
  }

  @Directive({
    selector: '[ngfOffCanvasWrapper]',
    host: {
      '[class.off-canvas-wrapper]': 'true'
    }
  })
  export class NgfOffCanvasWrapper implements AfterViewInit{
    private canvases: {[id: string]: NgfOffCanvas} = {};
    private backdrop: HTMLElement;
    private activeCanvas: NgfOffCanvas;
    @Output() toggled = new EventEmitter<NgfOffCanvas>();
    @ContentChild(NgfOffCanvasContent) content;
    @ContentChildren(NgfOffCanvas) _content;

    isOpen = false;
    constructor(private renderer: Renderer2) {

    }
    ngAfterViewInit(){
      this.canvases = this._content.reduce((cs, c) => {
        cs = {
          ...cs,
          [c.id]: c
        }
        return cs
      }, {})
    }
    toggleCanvas(id: string){
      if (!this.content){
        return;
      }
      const {[id || '']: canvas, ...canvases} = this.canvases;
      canvas.isOpen = !canvas.isOpen;
      Object.values(canvases).forEach((c) => {
        c.isOpen = !c.isOpen;
      })
      this.isOpen = canvas.isOpen;
      this.toggled.emit(canvas)
      if (this.isOpen){
        this.activeCanvas = canvas;
      }else{
        this.activeCanvas = undefined;
      }
      this.content.setActiveCanvas(canvas)
      this.toggleOffCanvasOverlay();

      return this;
    }

    private toggleOffCanvasOverlay(){
      if (!this.isOpen){
        this.backdrop.remove();
        this.backdrop = undefined;
      }else{
        const backdrop = this.renderer.createElement('div');
        backdrop.className= 'js-off-canvas-overlay is-overlay-fixed is-visible is-closable';
        backdrop.onclick = () => this.toggleCanvas(this.activeCanvas.id);
        document.body.appendChild(backdrop);
        this.backdrop = backdrop;
      }
    }
  }

  
  

  @Directive({
    selector: '[ngfOffCanvasToggle]',
    host: {
      '[class.off-canvas-toggle]': 'true'      
    }
  })
  export class NgfOffCanvasToggle{
    @Input() placement: 'left' | 'right' | 'top' | 'bottom';
    @Input('ngfOffCanvasContent') id;
    constructor(@Inject(forwardRef(() => NgfOffCanvasWrapper)) private wrapper) {}
    @HostListener('click')
    toggle(){
      this.wrapper.toggleCanvas(this.id);
    }
  }


