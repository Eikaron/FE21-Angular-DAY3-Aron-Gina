import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Package to grab URL value
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  //route = new ActivatedRoute();

  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      let id : any = params.get('productId');
      this.product = products[id];
    });

  }
}
