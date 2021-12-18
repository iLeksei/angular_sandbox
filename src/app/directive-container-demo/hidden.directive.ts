import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {


  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) { }

  @Input() set appHidden(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.clear();
    } else if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
