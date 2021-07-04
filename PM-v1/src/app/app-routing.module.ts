import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsResolverService } from './products-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'all',
    component: ProductListComponent,
    resolve: {
      items: ProductsResolverService
    },
    children: [
      {
        path: 'view/:itemId',
        component: ProductViewComponent,
      },
    ]
  },

  { path: 'new', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
