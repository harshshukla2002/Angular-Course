import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent implements OnInit {
  serverId: number = 4;
  serverStatus: string = 'Offline';
  serverName: string = '';
  allowDisabled: boolean = false;
  serverText: string = '';
  username: string = '';
  resetButtonDisabled: boolean = true;
  serverCreated: boolean = false;
  randomNumber: number = undefined;
  count: number = 1;
  countArray: Array<number> = [];

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    this.randomNumber = Math.random();
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverText = `Server is created and name is ${this.serverName}`;
    this.allowDisabled = true;
  }

  onChangeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.allowDisabled = false;
  }

  onChangeUserName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;

    if (this.username !== '') this.resetButtonDisabled = false;
  }

  onClickResetButton() {
    this.username = '';
    this.resetButtonDisabled = true;
  }

  getRandomColor() {
    return this.randomNumber > 0.5 ? 'green' : 'red';
  }

  incrementCount() {
    this.count = this.count + 1;
    this.countArray.push(this.count);
  }
}
