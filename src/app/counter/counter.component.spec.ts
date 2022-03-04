import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterComponent} from './counter.component';
import {By} from "@angular/platform-browser";

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".counter__counter").innerText).toEqual("0")
    expect(fixture.nativeElement.querySelector("#counter-increment-btn").innerText).toEqual("Increment")
    expect(fixture.nativeElement.querySelector("#counter-decrement-btn").innerText).toEqual("Decrement")
    expect(fixture.nativeElement.querySelector("#counter-reset-btn").innerText).toEqual("Reset")
  });

  fit("should change counter", () => {
    let counter = fixture.nativeElement.querySelector(".counter__counter")
    let incrementBtn = fixture.debugElement.query(By.css("#counter-increment-btn"));
    expect(counter.innerText).toEqual("0");

    incrementBtn.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(counter.innerText).toEqual("1");

    component.decrement();
    fixture.detectChanges();
    expect(counter.innerText).toEqual("0");

    component.decrement();
    component.decrement();
    fixture.detectChanges();
    expect(counter.innerText).toEqual("-2");

    component.reset();
    fixture.detectChanges();
    expect(counter.innerText).toEqual("0");
  })
});
