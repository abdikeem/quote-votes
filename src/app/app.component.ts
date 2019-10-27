import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[]= [

  // {id:1, name:'Inspirational Quotes'},
  // {id:2, name:'Quote of the day'},
  // {id:3, name:'Create your quote'},
  
];
}
