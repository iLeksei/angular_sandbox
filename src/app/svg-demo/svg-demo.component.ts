import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-demo',
  templateUrl: './svg-demo.component.html',
  styleUrls: ['./svg-demo.component.css']
})
export class SvgDemoComponent implements OnInit {

  color: string = 'rgb(255, 0, 0)';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor( Math.random() * 256);
    const b = Math.floor( Math.random() * 256);
    this.color = `rgb(${r},${g},${b})`;
  }
}
