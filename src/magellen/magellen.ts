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
    ElementRef,
    TemplateRef,
    HostListener,
    ContentChild,
    Component,
    ViewChildren
  } from '@angular/core';
  
  @Directive({
    selector: '[ngfMagellen]',
    host: {

    }
  })
  export class NgfMagellen{
    private _activeId;
    public set activeId(val){
      console.log(val);
      if (val === this._activeId){
        return;
      }
      this._activeId = val;
      Array.from(this.elRef.nativeElement.querySelectorAll('[href]')).forEach((e: HTMLAnchorElement) => {
        if (e.href.endsWith('#'+val)){
          e.classList.add('is-active')
        }else{
          e.classList.remove('is-active')
        }
      })
    } 
    @ViewChildren('a[href]') targets;
    constructor(private elRef: ElementRef) {
      
    }
    
  }
  @Directive({
    selector: '[ngfMagellenTarget]',
    host: {}
  })
  export class NgfMagellenTarget implements AfterViewInit{
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
  }

  @Directive({
    selector: '[ngfMagellenWrapper]',
    host: {
     
    }
  })
  export class NgfMagellenWrapper implements AfterViewInit{
    public targets: {[href: string] : NgfMagellenTarget} = {}
    @Input() offset = 0;
    @Input() boundary = 30;
    @ContentChild(NgfMagellen) magellen;
    @HostListener('window:scroll', ['$event'])
    onScroll($event){
      setTimeout(() => {
        const active = (Object.values(this.targets).filter((t) => (t.el.offsetTop - window.scrollY) < this.boundary ).pop()) || {id: undefined};
        this.magellen.activeId = active.id;
      })
 
    }
  
    constructor(private renderer: Renderer2) {

    }
    ngAfterViewInit(){
      
    }
    addTarget(target){
      this.targets[target.id] = target;
    }
  }

  
  

  


