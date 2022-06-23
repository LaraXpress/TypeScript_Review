import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `             
      <h2>{{name}}</h2>
      <h2>{{name | slice:3}}</h2>
      <h2>{{name | slice:3:5}}</h2>
      <h2>{{name | lowercase}}</h2>
      <h2>{{name | uppercase}}</h2>
      <h2>{{message | titlecase}}</h2>
      <h2>{{person }}</h2>
      <h2>{{person | json}}</h2>
      <hr>
      <h2>{{2.3658547 | number:'1.2-3'}}</h2>
      <h2>{{2.3658547 | number:'3.3-4'}}</h2>
      <h2>{{2.3658547 | number:'3.1-2'}}</h2>
      <h2>{{0.35 | percent}}</h2>
      <h2>{{0.25 | currency}}</h2>
      <h2>{{0.25 | currency:'GBP'}}</h2>
      <h2>{{0.25 | currency:'GBP':'code'}}</h2>
      <h2>{{0.25 | currency:'EUR ':'code'}}</h2>
      <hr>
      <h2>{{date}}</h2>
      <h2>{{date | date:'short'}}</h2>
      <h2>{{date | date:'shortDate'}}</h2>
      <h2>{{date | date:'mediumDate'}}</h2>
      <h2>{{date | date:'longDate'}}</h2>
      <h2>{{date | date:'shortTime'}}</h2>
      <h2>{{date | date:'mediumTime'}}</h2>                  
    `,

  styles: []

})

export class TestComponent implements OnInit {

  public name  = "Welcome to Angular";
  public message = "upcoming soon!";
  public person = {
    "firstName" : 'john',
    "lastName" : 'smith'
  }
  public date = new Date;
  constructor() { }
  
  ngOnInit(): void {
  }  

  
}
