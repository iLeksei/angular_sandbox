import {Component, OnInit, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from "../countdown-timer/countdown-timer.component";

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit {

  @ViewChild(CountdownTimerComponent)
  private countdownTimer!: CountdownTimerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.countdownTimer.start();
  }

  reset() {
    this.countdownTimer.reset()
  }

}
