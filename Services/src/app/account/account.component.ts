import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging-service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountService: AccountService) {}

  onStatusChange(newStatus: string) {
    const tempAccountStatus = { id: this.id, newStatus };
    this.accountService.onStatusChanged(tempAccountStatus);
  }
}
