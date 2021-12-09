import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timed-counter',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  counter: number = 0;
  private timerId: any;
  @Input() reverseCounter = 0;// = new FormControl(0);
  isReverseMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public reset(): void {
    clearInterval(this.timerId);
    this.counter = 0;
    this.reverseCounter = 0;
  }

  changeReverseCounter(value: any) {
    this.counter = value;
    this.reverseCounter = value;
  }


  start() {
    if (this.isReverseMode) {
      if (this.reverseCounter > 0) {
        this.timerId = setInterval(() => {
          if (this.reverseCounter === 1) {
            clearInterval(this.timerId);
          }
          this.reverseCounter = +this.reverseCounter - 1;
        }, 1000)
      } else if (this.reverseCounter < 0) {
        this.timerId = setInterval(() => {
          if (this.reverseCounter === -1) {
            clearInterval(this.timerId);
          }
          this.reverseCounter = +this.reverseCounter + 1;
        }, 1000)
      }
    } else {
      this.timerId = setInterval(() => {
        this.counter+=1;
      }, 1000)
    }
  }

  stop() {
    clearInterval(this.timerId);
  }

}
