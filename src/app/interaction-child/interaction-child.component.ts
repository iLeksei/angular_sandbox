import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit {

  @Input() hobbiesTitle: string = "";
  @Input() hobbies: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
