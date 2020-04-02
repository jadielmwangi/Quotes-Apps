import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes('Jadiel.M.M: ','  Success is ability to move from one failure to another with no loss of enthusiasm','Sir Winston Churchill:',0,0,new Date(2020,3,1)),
    new Quotes('Julius.R: ', ' The glory doesnt go to those who start but to those who finish the race',' Nelson Mandela',0,0,new Date(2020,4,1)),
    new Quotes('Eunice.M', '  Dreams come true to those who have them.',' Dr Albert Einstein ',0,0,new Date(2020,3.1)),
  ];

  firstNumber :number
  lastNumber :number
  count: number

  addNewquote(quote){
    let quoteLength = this.quotes.length;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
    

  }

  deleteQuote(isComplete,index){
    if (isComplete) {
      let toDelete = confirm(`You are about to delete this Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {

  }

}
