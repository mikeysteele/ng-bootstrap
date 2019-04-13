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
    OnDestroy,
    ElementRef,
    TemplateRef,
    HostListener,
    ContentChild,
    Component,
    ViewChildren
  } from '@angular/core';
  @Directive({
    selector: 'a[ngfMagellenAnchor]',
    host: {
      '[class.is-active]': 'isActive'
    }
  })
  export class NgfMagellenAnchor implements AfterViewInit{
    @Input('ngfMagellenAnchor') public id;
    @Input() public href;

    public isActive;
    ngAfterViewInit(){
     
    }
  } 
  @Directive({
    selector: '[ngfMagellen]',
    host: {

    }
  })
  export class NgfMagellen{
    private _activeId;
    @ContentChildren(NgfMagellenAnchor) anchors;
    public set activeId(val){
      if (val === this._activeId || !this.anchors){
        return;
      }
      this._activeId = val;
      this.anchors.forEach((e: NgfMagellenAnchor) => {
        const id = e.id || e.href
        if (id.endsWith('#'+val)){
          e.isActive = true
        }else{
          e.isActive = false;
        }
      })
    }         
  }
  
  @Directive({
    selector: '[ngfMagellenTarget]',
    providers: [
      NgfMagellenAnchor
    ],
    host: {}
  })
  export class NgfMagellenTarget implements AfterViewInit, OnDestroy{
    @Input() id;
    @Input('ngfMagellenTarget') set target(val) {
      this.id = val;
    };
    public el: HTMLElement
    constructor(@Inject(forwardRef(() => NgfMagellenWrapper)) private wrapper, private elRef: ElementRef){
      this.el = elRef.nativeElement;
    }
    ngAfterViewInit(){
      this.wrapper.addTarget(this)
    }
    ngOnDestroy(){
      this.wrapper.removeTarget(this)
    }
  }

  @Directive({
    selector: '[ngfMagellenWrapper]',
    host: {
     
    }
  })
  export class NgfMagellenWrapper {
    public targets:  NgfMagellenTarget[] = [];
    @Input() offset = 0;
    @Input() boundary = 30;
    @ContentChild(NgfMagellen) magellen;

    @HostListener('window:scroll', ['$event'])
    onScroll($event){
      if (!this.magellen){
        return;
      }
      setTimeout(() => {
        const active = this.targets.filter((t) => (t.el.offsetTop - window.scrollY) < this.boundary ).pop() || {id: undefined};
        this.magellen.activeId = active.id;
      })
 
    }
    addTarget(target){
      this.targets = [
        ...this.targets,
        target
      ];
    }
    removeTarget(target){
      this.targets = this.targets.filter((t) => t.id !== target.id)
    }
  }

  
  

  


