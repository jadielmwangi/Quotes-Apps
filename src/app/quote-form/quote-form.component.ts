

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newquote = new Quotes("", "", "", 0, 0, new Date());
  @Output() addquotes = new EventEmitter<Quotes>();

  submitquote() {
    this.addquotes.emit(this.newquote);
    this.newquote = new Quotes("", "", "", 0, 0, new Date());
  }

  constructor() { }

  ngOnInit() {
  }

}
