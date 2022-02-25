import { HiddenDirective } from './hidden.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";

@Component({
  template: `<div id="test">Test</div>`
})
class TestComponent {}

describe('HiddenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, HiddenDirective]
    }).createComponent(TestComponent);

    fixture.detectChanges();
  })

  fit('should create an instance', () => {
    let el = fixture.nativeElement.querySelector("#test");
    console.log(el)
  });
});
