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
    HostBinding,
    HostListener,
    ContentChild,
    Component,
    ViewChildren
  } from '@angular/core';
  import { DOCUMENT } from '@angular/common';

  @Directive({
    selector: 'a[ngfMagellenAnchor]',
    host: {
      '[class.is-active]': 'isActive',
    }
  })
  export class NgfMagellenAnchor{
    @Input('ngfMagellenAnchor') public id;
    @Input() public href;

    public isActive;
    constructor(@Inject(forwardRef(() => NgfMagellenWrapper)) private wrapper, @Inject(DOCUMENT) private document){
      
    }
    // @HostListener('click')
    // scrollIntoView($event){
    //   $event.preventDefault();
    //   $event.stopPropagation();
    //   setTimeout(() => {
    //     const offSet = this.wrapper.offset;
    //     const target = document.querySelector(this.id || this.href);
    //     const scroll = target.offsetTop - offSet;
    //     window.scrollTo(window.scrollX, scroll);
    //   })
      
    // }
    
  } 
  @Directive({
    selector: '[ngfMagellen]',
    host: {
      '[class.ngf-magellen]': 'true'
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
    @Input() boundary = 20;
    @ContentChild(NgfMagellen) magellen;

    @HostListener('window:scroll', ['$event'])
    onScroll($event){
      if (!this.magellen){
        return;
      }
      setTimeout(() => {
        console.log('post')
        const active = this.targets.filter((t) => {
          const targetPos = (window.scrollY + +this.offset) + this.boundary; //the scroll position where elements are 'active'
          return targetPos > t.el.offsetTop;
        }).pop() || {id: undefined}
          this.magellen.activeId = active.id;
        });
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

  
  

  


