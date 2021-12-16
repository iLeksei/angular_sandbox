import {Component, Injectable, Injector, OnInit} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {PopupService} from "./popup.service";
import {PopupComponent} from "./popup/popup.component";

@Component({
  selector: 'app-custom-component-demo',
  templateUrl: './custom-component-demo.component.html',
  styleUrls: ['./custom-component-demo.component.css']
})
export class CustomComponentDemoComponent {

  constructor(private injector: Injector, public popupService: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }


}
