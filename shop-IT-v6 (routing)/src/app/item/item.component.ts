import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  // input property
  @Input('value') item: any;
  // state
  currentTab: number = 1;
  reviews: Array<any> = []

  constructor(private itemsService: ItemsService,
    private cartService: CartService) { }

  changeCurrentTab(tabIndex: number, event: any) {
    event.preventDefault()
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.reviews = this.itemsService.getReviews(this.item.id)
    }
  }

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }

  handleBuy(event: any) {
    this.cartService.addToCart(this.item)
  }


}
