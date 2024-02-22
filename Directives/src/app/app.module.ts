import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { basicHighlightDirective } from './basic-hightlight/basic-highligh.directive';
import { BetterHighlightDirective } from './better-directive/better-highlight.directive';
import { CheckDirective } from './check.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlightDirective,
    BetterHighlightDirective,
    CheckDirective,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
