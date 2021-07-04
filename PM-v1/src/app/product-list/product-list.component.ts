import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: any = []

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.items = data.items
    })
  }

  deleteItem(event: any, itemId: number) {
    event.preventDefault()
    this.productsService.deleteItem(itemId)
      .subscribe(response => {
        this.items = this.items.filter((item: any) => item.id !== itemId)
      })
  }

}
