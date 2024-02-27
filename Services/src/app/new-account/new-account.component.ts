import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent {
  constructor(private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    const tempAccount = { name: accountName, status: accountStatus };
    this.accountService.onAccountAdded(tempAccount);
  }
}
