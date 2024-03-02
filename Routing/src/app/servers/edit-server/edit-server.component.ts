import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { canComponentDeactivate } from './can-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: number;
  changesSaved: boolean;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServer(
      Number(this.route.snapshot.params['id']) || 1
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = +queryParams['allowEdit'];
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) return true;

    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    )
      return confirm('Do you want to leave');
    else return true;
  }
}
