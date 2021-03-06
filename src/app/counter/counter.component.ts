import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = 0;
  title: string = "Counter";
  date = new Date();
  currency = "100.00"

  constructor() { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    this.counter--;
  }


  public reset(): void {
    this.counter = 0;
  }



}

