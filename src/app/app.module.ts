import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteCompComponent } from './quote-comp/quote-comp.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
// import { TimePipe } from './time.pipe';
import { TimecountPipe } from './timecount.pipe';
// import { HighlightQuotePipe } from './highlight-quote.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCompComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    HighlightQuoteDirective,
    // HighlightQuotePipe,
    // TimePipe,
    TimecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
