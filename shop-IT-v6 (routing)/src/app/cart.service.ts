import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<any> = []

  cartCountStream = new BehaviorSubject<number>(0)

  constructor() { }


  addToCart(item: any) {
    this.cart.unshift(item)
    this.cartCountStream.next(this.cart.length)
  }

  getCartCount() {
    return this.cart.length;
  }


}
