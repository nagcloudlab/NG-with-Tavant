import { Component} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  template: `
  <div>
    <hr/>
      {{value}} item(s) in cart
    <hr/>
  </div>
  `
})
export class CartBadgeComponent {

  value = 0;

  constructor(private cartService: CartService) { }

  ngDoCheck() {
    this.value = this.cartService.getCartCount()
  }

}
