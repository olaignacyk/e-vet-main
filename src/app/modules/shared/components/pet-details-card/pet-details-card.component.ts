import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-details-card',
  templateUrl: './pet-details-card.component.html',
  styleUrls: ['./pet-details-card.component.scss'],
})
export class PetDetailsCardComponent implements OnInit {
  @Input() pet: any;

  constructor() {}

  ngOnInit(): void {}
}
