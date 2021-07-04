import { Component } from '@angular/core';
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

  ngOnInit() {
    this.cartService.cartCountStream.subscribe((count: number) => {
      this.value = count
    })
  }

  // ngDoCheck() {
  //   console.log("CartBadgeComponent :: ngDoCheck");
  //   this.value = this.cartService.getCartCount() // pull cart count from cartService
  // }

}
