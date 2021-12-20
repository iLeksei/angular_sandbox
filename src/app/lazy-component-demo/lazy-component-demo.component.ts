import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-component-demo',
  templateUrl: './lazy-component-demo.component.html',
  styleUrls: ['./lazy-component-demo.component.css']
})
export class LazyComponentDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
