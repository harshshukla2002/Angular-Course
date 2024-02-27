import { Injectable } from '@angular/core';
import { LoggingService } from './logging-service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hiddent Account',
      status: 'unknown',
    },
  ];

  constructor(private loggingService: LoggingService) {}

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  onStatusChanged(statusInfo: { id: number; newStatus: string }) {
    this.accounts[statusInfo.id].status = statusInfo.newStatus;
    this.loggingService.logStatusChange(statusInfo.newStatus);
  }
}
