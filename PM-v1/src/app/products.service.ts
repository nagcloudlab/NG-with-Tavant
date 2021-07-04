import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/api/items"

  constructor(private http: HttpClient) { }

  getItems() {
    const stream: Observable<any> = this.http.get(this.url)
    return stream;
  }
  deleteItem(itemId: number) {
    return this.http.delete(`${this.url}/${itemId}`)
  }
  saveProduct(product: any) {
    return this.http.post(this.url, product)
  }

}
