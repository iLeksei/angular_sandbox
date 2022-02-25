import {Component, Input, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    // animate(
    //   "2s ease-in", keyframes([
    //     style({ opacity: 0 }),
    //     style({ opacity: 1 }),
    //   ])
    // ),
    // trigger("appearanceTrigger", [
    //   state("appearance", style({
    //     opacity: 0
    //   })),
    //   transition("* => appearance", [
    //     style({ opacity: 0 }),
    //     animate("500 ease-in", style({ opacity: 1 })),
    //   ]),
    // ]),
  ]
})
export class CardComponent implements OnInit {

  @Input() title: string = "";
  @Input() subtitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
