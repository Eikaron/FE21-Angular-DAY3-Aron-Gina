import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];

  constructor() {}

  addToCart(product: any){ //add items to product array
      this.items.push(product); 
  }

  getItems(){ //show items
    return this.items;
  }

  clearCart(){ //self explanatory
    this.items = [];
    return this.items;
  }

}
