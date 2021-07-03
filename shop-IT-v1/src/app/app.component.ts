import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT-v1';

  items =
    [
      {
        name: 'Laptop',
        price: 149000,
        description: 'New Mac Pro',
        isAvailable: true,
        imagePath: 'assets/Laptop.png'
      },
      {
        name: 'Mobile',
        price: 19000,
        description: 'New Pro',
        isAvailable: true,
        imagePath:'assets/Mobile.png'
      }
    ]

  currentTab = 1;

  changeCurrentTab(tabIndex: number) {
    this.currentTab = tabIndex
  }

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }


}
