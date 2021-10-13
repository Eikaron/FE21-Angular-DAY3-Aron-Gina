import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Package to grab URL value
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  //route = new ActivatedRoute();

  product: any;

  constructor(private route: ActivatedRoute, private CS: CartService) { } 

  addToCart(prod: any){
    alert("Item added");
    this.CS.addToCart(prod);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      let id : any = params.get('productId');
      this.product = products[id];
    });

  }
}
