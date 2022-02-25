import { EventInterceptorDirectiveDirective } from './event-interceptor-directive.directive';
import {Component, DebugElement, ElementRef} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  template: `<div id="test" appHighLight>Test</div>`
})
class TestComponent {}

describe('EventInterceptorDirectiveDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [EventInterceptorDirectiveDirective, TestComponent]
    })
      .createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  })

  fit('should create an instance', () => {
    let el = fixture.nativeElement.querySelector("#test");
    el = fixture.debugElement.query(By.css("div"));

    el.triggerEventHandler("mouseenter", null);
    fixture.detectChanges();
    expect(el.nativeElement.style.boxShadow).toEqual("yellow 0px 0px 10px")

    el.triggerEventHandler("mouseleave", null);
    fixture.detectChanges();
    expect(el.nativeElement.style.boxShadow).toEqual("")
    // console.log(el.nativeElement.style.boxShadow)
  });
});
