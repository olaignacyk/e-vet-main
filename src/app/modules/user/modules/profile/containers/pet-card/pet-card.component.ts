import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  mockedData = [
    { id: 1, gender: 'male', name: 'Azor', age: 12, species: 'Pies' },
    { id: 2, gender: 'male', name: 'Tofik', age: 13, species: 'Pies' },
    { id: 3, gender: 'female', name: 'Pusia', age: 14, species: 'Kot' },
  ];
  displayedColumns: string[] = ['name', 'age', 'gender', 'species'];

  constructor() {}

  ngOnInit(): void {}
}
