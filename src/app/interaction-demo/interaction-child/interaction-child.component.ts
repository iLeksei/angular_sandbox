import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit {

  private _hobbiesTitle: string = "";
  @Input() hobbies: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  @Input() set hobbiesTitle(val: any) {
    this._hobbiesTitle = val ? val.toUpperCase() : "";
  }

  get hobbiesTitle() {
    return this._hobbiesTitle;
  }

}
