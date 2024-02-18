import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverName: string = '';
  serverContent: string = '';
  serverElements = [];

  onServerNameChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onServerContentChange(event: Event) {
    this.serverContent = (<HTMLInputElement>event.target).value;
  }

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.serverName,
      content: this.serverContent,
    });
  }

  onAddBluePrint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.serverName,
      content: this.serverContent,
    });
  }
}
