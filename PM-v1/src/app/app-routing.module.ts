import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateChildService } from './can-activate-child.service';
import { CanActivateService } from './can-activate.service';
import { CanDeactivateService } from './can-deactivate.service';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolverService } from './product-resolver.service';
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
        resolve: {
          message: ProductResolverService
        }
      },
    ],
    canActivateChild: [CanActivateChildService]
  },
  {
    path: 'new',
    component: ProductFormComponent,
    canActivate: [CanActivateService],
    canDeactivate: [CanDeactivateService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
