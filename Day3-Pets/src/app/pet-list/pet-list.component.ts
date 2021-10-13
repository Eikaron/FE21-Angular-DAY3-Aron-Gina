import { Component, OnInit } from '@angular/core';
import { pets } from '../pets';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass']
})
export class PetListComponent implements OnInit {

  pets = pets;

  constructor() { }

  ngOnInit(): void {
  }

}
