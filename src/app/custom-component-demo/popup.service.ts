import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {NgElement, WithProperties} from "@angular/elements";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private factoryResolver: ComponentFactoryResolver) { }

  showAsComponent(message: string) {
    const popup = document.createElement("popup-component");
    const factory = this.factoryResolver.resolveComponentFactory(PopupComponent);
    const popupRef = factory.create(this.injector, [], popup);
    this.applicationRef.attachView(popupRef.hostView);

    //register onClose event
    popupRef.instance.closed.subscribe(() => {
      console.log("popup was closed");
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupRef.hostView);
    });
    popupRef.instance.message = message;
    document.body.appendChild(popup);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    // Create element
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;
    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    // Set the message
    popupEl.message = message;
    // Add to the DOM
    document.body.appendChild(popupEl);
  }

}
