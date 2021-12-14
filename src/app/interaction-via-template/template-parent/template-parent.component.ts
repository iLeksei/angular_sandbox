import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {ZippyContentDirective} from "../../directives/zippy-content.directive";

@Component({
  selector: 'app-template-parent',
  templateUrl: './template-parent.component.html',
  styleUrls: ['./template-parent.component.css']
})
export class TemplateParentComponent {

  @Input() showGreeting: boolean = false;

  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;

  constructor() { }
}
