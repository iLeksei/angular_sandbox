import {ContentChild, Directive, TemplateRef} from '@angular/core';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Directive({
  selector: '[appZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
