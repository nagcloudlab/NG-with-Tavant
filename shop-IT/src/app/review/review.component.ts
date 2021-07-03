import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  template: `
  
  <div class="alert alert-danger">
    <span>{{review.stars}}</span> &mdash; <span>{{review.author}}</span>
    <hr/>
    <div>{{review.body}}</div>
  </div>
  
  `
})
export class ReviewComponent {
  @Input('value') review: any
}
