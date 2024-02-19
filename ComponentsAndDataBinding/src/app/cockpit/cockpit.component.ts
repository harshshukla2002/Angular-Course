import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent implements OnInit {
  serverName: string = '';
  serverContent: string = '';
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverNameInput) {
    console.log(
      `this is getting from local refrences and value is ${serverNameInput.value}`
    );
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
    });
  }

  onAddBluePrint() {
    this.blueprintCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
    });
  }
}
