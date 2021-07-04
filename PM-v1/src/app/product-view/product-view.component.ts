import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {


  itemId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.itemId = this.route.snapshot.params['itemId']

    this.route.params
      .subscribe(params => {
        this.itemId = params['itemId']
      })

  }

}
