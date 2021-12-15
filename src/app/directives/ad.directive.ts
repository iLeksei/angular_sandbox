import {Directive, ViewContainerRef} from '@angular/core';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Directive({
  selector: '[adHost]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
