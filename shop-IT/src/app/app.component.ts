import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT-v2';
  items =
    [
      {
        name: 'Laptop',
        price: 149000,
        description: 'New Mac Pro',
        isAvailable: true,
        imagePath: 'assets/Laptop.png',
        currencyCode: 'INR',
        makeDate: Date.now(),
        discount: 10000.00
      },
      {
        name: 'Mobile',
        price: 19000,
        description: 'New Pro',
        isAvailable: true,
        imagePath: 'assets/Mobile.png',
        currencyCode: 'INR',
        makeDate: Date.now()
      }
    ]

  cart: Array<any> = []

  addToCart(item: any) {
    this.cart.unshift(item)
  }

}
