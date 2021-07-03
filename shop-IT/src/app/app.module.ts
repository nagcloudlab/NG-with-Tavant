import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { DiscountPipe } from './discount.pipe';
import { CartViewComponent } from './cart-view/cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ReviewComponent,
    CartBadgeComponent,
    DiscountPipe,
    CartViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
