import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes [] = [
    new Quotes(1, 'Inspirational Quotes', 'Find an online version and watch merlin find his son',new Date(2030,4,15)),
    new Quotes(2,'Quotes of the day','I have to buy cookies for the parrot',new Date(2020,4,15)),
    new Quotes(3,'quotes of the year','Diana has her birthday coming up soon',new Date(2034,4,15)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
