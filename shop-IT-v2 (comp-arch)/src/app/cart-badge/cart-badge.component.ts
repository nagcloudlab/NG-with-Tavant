import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-badge',
  template:`
  <div>
    <hr/>
      {{value}} item(s) in cart
    <hr/>
  </div>
  `
})
export class CartBadgeComponent  {

 @Input() value=0;

}
