import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pets } from '../pets';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.sass']
})
export class PetDetailsComponent implements OnInit {

  pet: any;

  constructor(private route: ActivatedRoute, private CS: CartService) {} 
    
  addToCart(pet: any){
    alert("You added a pet! Yay!");
    this.CS.addToCart(pet);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: any = params.get('petID');
      this.pet = pets[id];
    });
  }

}
