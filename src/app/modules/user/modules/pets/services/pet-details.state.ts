import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Pet } from '../resources/interfaces/pet.interface';

@Injectable()
export class PetDetailsState {
  pets = new BehaviorSubject<Pet[]>([]);
  petsIsLoading = new BehaviorSubject(false);

  getPets(): void {
    this.petsIsLoading.next(true);

    this.mockedData()
      .pipe(delay(2000))
      .subscribe((data) => {
        this.pets.next(data);
        this.petsIsLoading.next(false);
      });
  }

  private mockedData(): Observable<any> {
    return of([
      { id: 1, gender: 'male', name: 'Azor', age: 12, species: 'Pies' },
      { id: 2, gender: 'male', name: 'Tofik', age: 13, species: 'Pies' },
      { id: 3, gender: 'female', name: 'Pusia', age: 14, species: 'Kot' },
    ]);
  }
}
