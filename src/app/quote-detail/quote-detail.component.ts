
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  @Output() isUp = new EventEmitter<boolean>();
  addUp(add: boolean) {
    this.isUp.emit(add);
  }

  @Output() isDown = new EventEmitter<boolean>();
  addDown(add: boolean) {
    this.isDown.emit(add);
  }
  constructor() { }

  ngOnInit() {
  }

}
