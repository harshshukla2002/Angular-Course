import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(200px)',
        })
      ),
      transition('normal => highlighted', animate(500)),
      transition('highlighted => normal', animate(800)),
      // for same timing of animate don't use seperate transition call, instead of => use <=>
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
  }

  onAdd(item: string) {
    this.list.push(item);
  }
}
