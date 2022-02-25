import { AdDirective } from './ad.directive';
import {Component, ComponentRef, ViewContainerRef} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

@Component({
  template: `<div id="test">Test</div>`
})
class TestComponent {
}

describe('AdDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AdDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  })


  fit('should create an instance', () => {
    let el = fixture.nativeElement.querySelector("#test");
    console.log(el)
  });
});
