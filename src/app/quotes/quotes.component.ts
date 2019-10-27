import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Inspirational Quotes', 'Find an online version and watch merlin find his son'),
    new Quotes(2,'Quotes of the day','I have to buy cookies for the parrot'),
    new Quotes(3,'quotes of the year','Diana has her birthday coming up soon'),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
