import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from './accounts.service';
import { LoggingService } from './logging-service';

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, NgbModule],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
