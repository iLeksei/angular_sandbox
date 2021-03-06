import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction-parent',
  templateUrl: './interaction-parent.component.html',
  styleUrls: ['./interaction-parent.component.css']
})
export class InteractionParentComponent implements OnInit {

  hobbies: string[] = ['Judo', 'Programming', 'Hiking', 'Music'];
  hobbiesTitle: string = "Hobbies:";
  areHobbiesSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChildClick($event: string) {
    console.log($event)
  }
}
