import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductHomeComponent },
]

@NgModule({
  declarations: [
    ProductHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductDashboardModule {
  constructor() {
    console.log("ProductDashboardModule - loaded");
  }
}
