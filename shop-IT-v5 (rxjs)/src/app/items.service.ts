import { Injectable } from '@angular/core';

// singletons

@Injectable()
export class ItemsService {

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

  constructor() { }

  getItems(): Array<any> {
    return this.items;
  }
  getReviews(itemId: number) {
    return [
      { author: 'who1', stars: 5, body: 'sample-review-1' },
      { author: 'who2', stars: 2, body: 'sample-review-2' }
    ]
  }



}
