import {Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit, OnChanges {

  private _hobbiesTitle: string = "";
  @Input() hobbies: string[] = [];
  @Input() areHobbiesSelected: boolean = false;
  @Output() hobbyEvent = new EventEmitter<string>();
  clickedHobby: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  @Input() set hobbiesTitle(val: any) {
    this._hobbiesTitle = val ? val.toUpperCase() : "";
  }

  get hobbiesTitle() {
    return this._hobbiesTitle;
  }

  onHobbyClick(hobby: string) {
    this.hobbyEvent.emit(hobby);
    this.clickedHobby = this.clickedHobby === hobby ? "" : hobby;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let change in changes) {
      if (change === "areHobbiesSelected" && !!changes[change].currentValue) {
        this.hobbies = this.hobbies.map( h => h.toUpperCase());
      } else {
        this.hobbies = this.hobbies.map( h => h.charAt(0).toUpperCase() + h.slice(1, h.length).toLowerCase());
      }
      console.log(changes[change]);
    }
  }

}
