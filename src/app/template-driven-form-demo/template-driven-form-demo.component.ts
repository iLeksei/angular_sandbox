import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.css']
})
export class TemplateDrivenFormDemoComponent implements OnInit, DoCheck {

  favoriteColor = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.favoriteColor)
  }

}
