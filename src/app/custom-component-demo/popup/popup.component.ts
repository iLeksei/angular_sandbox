import {Component, HostBinding, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'my-popup',
  template: `
    <span class="popup__message">Popup: {{message}}</span>
    <button (click)="closed.next()" class="popup__btn" >&#x2716;</button>
  `,
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(100%)'})),
      state('void, closed', style({transform: 'translateY(-5%)', opacity: 0})),
      transition('* => *', animate('150ms ease-in')),
    ])
  ],
  styles: [`
    :host {
      position: absolute;
      top: 5%;
      left:  calc(50% - 48px);
      right: 0;
      height: 48px;
      width: 96px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid lightgrey;
      font-size: 24px;
      border-radius: 5%;
    }

    button {
      border-radius: 50%;
    }
  `]
})
export class PopupComponent {

  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): string { return this._message; }
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  private _message = '';

  @Output()
  closed = new EventEmitter<void>();
}
