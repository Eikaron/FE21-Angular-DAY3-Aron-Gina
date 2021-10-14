import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  items: any;
  
  checkoutForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private CS: CartService) { }

  ngOnInit(): void {
    this.items = this.CS.getItems();
  }

  onSubmit(){
    this.items = this.CS.clearCart();
    this.checkoutForm.reset();
  }
}
