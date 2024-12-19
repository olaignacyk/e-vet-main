import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { PetsDataService } from './pets.data-service';
import { Pet } from '../resources/interfaces/pet.interface';

@Injectable()
export class PetsState {
  pets = new BehaviorSubject<Pet[]>([]);
  petsIsLoading = new BehaviorSubject(false);

  constructor(private dataService: PetsDataService) {}

  getPets(): void {
    this.petsIsLoading.next(true);

    this.dataService.getList().subscribe((pets) => {
      this.pets.next(pets);
      this.petsIsLoading.next(false);
    });
  }
}
