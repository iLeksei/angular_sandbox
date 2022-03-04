import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import { CountdownTimerComponent } from './countdown-timer.component';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should start timer', fakeAsync(() => {
    let comp = new CountdownTimerComponent();
    expect(comp.counter).toEqual(10)
    comp.start();
    tick(11000)
    expect(comp.counter).toEqual(0)
    flush();
  }));
});
