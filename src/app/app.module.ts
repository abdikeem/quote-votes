import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { QuotesComponent } from './quotes/quotes.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDetailComponent,
    QuotesComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

