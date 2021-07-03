import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<any> = []

  constructor() { }

  addToCart(item: any) {
    this.cart.unshift(item)
  }

  getCartCount() {
    return this.cart.length;
  }


}
