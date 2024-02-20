import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentLocation = 'recipe';

  onNavigate(loc: string) {
    this.currentLocation = loc;
  }
}
