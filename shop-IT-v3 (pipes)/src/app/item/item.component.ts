import { Component, Input,Output,EventEmitter } from '@angular/core';

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
  reviews: Array<any> = [
    { author: 'who1', stars: 5, body: 'sample-review-1' },
    { author: 'who2', stars: 2, body: 'sample-review-2' }
  ]
  // Event
  @Output() buy=new EventEmitter()


  changeCurrentTab(tabIndex: number) {
    this.currentTab = tabIndex
  }

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }

  handleBuy(event:any){
    this.buy.emit(this.item)
  }

}
