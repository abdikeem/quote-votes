import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 

  quotes: Quotes [] = [
    new Quotes(1, 'Inspirational Quote', 'If you are working on something that you really care about, you do not have to be pushed',new Date(2020,7,1)),
    new Quotes(2,'Quote of the day','It is not whether you get knocked down, is whether you get up',new Date(2019,12,10)),
    new Quotes(3,'quote of the year','You learn more from failure than from success',new Date(2024,4,15)),
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

  addNewGoal(quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
 

upVotes:number=0;
upVote(){
  this.upVotes=this.upVotes+1;

}
downVotes:number=0;
downVote(){
  this.downVotes=this.downVotes+1;

}

  constructor() { }

  ngOnInit() {
  }

}
