// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { QuoteCompComponent } from './quote-comp/quote-comp.component';
// import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
// import { QuoteFormComponent } from './quote-form/quote-form.component';
// import { HighlightQuoteDirective } from './highlight-quote.directive';
// import { TimecountPipe } from './timecount.pipe';


// @NgModule({
//   declarations: [
//     AppComponent,
//     QuoteCompComponent,
//     QuoteDetailComponent,
//     QuoteFormComponent,
//     HighlightQuoteDirective,
  
//     TimecountPipe
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { QuoteCompComponent } from './quote-comp/quote-comp.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { TimeCountPipe } from './timecount.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuoteCompComponent,
    QuoteDetailComponent,
    TimeCountPipe,
    QuoteFormComponent,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

