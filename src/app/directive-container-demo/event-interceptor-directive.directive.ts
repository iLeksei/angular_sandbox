import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class EventInterceptorDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  public onMouseEnter() {
    this.el.nativeElement.style.boxShadow = "0 0 10px yellow";
  }

  @HostListener("mouseleave")
  public onMouseLeave() {
    this.el.nativeElement.style.boxShadow = "";
  }

}
