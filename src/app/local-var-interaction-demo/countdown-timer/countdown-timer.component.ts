import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  counter: number = 10;
  timerId: number = 0;
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }


  start() {
    this.message = "";
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      if (this.counter === 0) {
        clearInterval(this.timerId);
        this.message = "done!";
      } else {
        this.counter-=1;
      }
    }, 1000);
  }

  reset() {
    this.message = "Was stopped!";
    this.counter = 10;
    clearInterval(this.timerId);
  }

}
