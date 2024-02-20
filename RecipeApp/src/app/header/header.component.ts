import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() location = new EventEmitter<string>();

  OnSelectLoc(loc: string) {
    this.location.emit(loc);
  }
}
