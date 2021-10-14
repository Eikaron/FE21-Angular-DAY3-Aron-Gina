import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];

  constructor() { }

  addToCart(pet: any){
    this.items.push(pet);
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

}
