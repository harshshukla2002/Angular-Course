import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface serverType {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<serverType> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): serverType | Observable<serverType> | Promise<serverType> {
    return this.serversService.getServer(+route.params['id']);
  }
}
