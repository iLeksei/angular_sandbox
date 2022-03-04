import { ZippyContentDirective } from './zippy-content.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AdDirective} from "./ad.directive";

@Component({
  template: `<div id="test">Test</div>`
})
class TestComponent {
}

describe('ZippyContentDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ZippyContentDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  })

  fit('should create an instance', () => {
    let el = fixture.nativeElement.querySelector("#test");
    console.log(el)
  });
});
