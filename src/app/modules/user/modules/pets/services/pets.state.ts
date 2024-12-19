import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, first } from 'rxjs';
import { Pet } from '../resources/interfaces/pet.interface';
import { PetsDataService } from './pets-data.service';
import { SpeciesListTableItem } from '../../../../admin/modules/species/resources/interfaces/species-list-table-item.interface';
import { AuthState } from '../../../../auth/modules/auth-state/auth.state';
import { UserToken } from 'src/app/modules/shared/resources/interfaces/user-token.interface';
import { OwnerDataService } from 'src/app/modules/shared/services/owner.data-service';

@Injectable()
export class PetsState {
  pets = new BehaviorSubject<Pet[]>([]);
  petDetails = new BehaviorSubject<Pet | undefined>(undefined);
  petsIsLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  species = new BehaviorSubject<SpeciesListTableItem[]>([]);
  speciesIsLoading = new BehaviorSubject(false);

  constructor(
    private dataService: PetsDataService,
    private ownerDataService: OwnerDataService,
    private authState: AuthState
  ) {}

  getPets(): void {
    this.petsIsLoading.next(true);
    this.getSpecies();

    this.authState.user.pipe(first()).subscribe((user: UserToken | null) => {
      if (user) {
        this.ownerDataService.getOwnerById(user.userId).subscribe((owner) => {
          this.pets.next(owner.pets);
          this.petsIsLoading.next(false);
        });
      }
    });
  }

  createPet(payload: Pet): void {
    this.authState.user.pipe(first()).subscribe((user: UserToken | null) => {
      if (user) {
        this.dataService
          .createPet({ ...payload, ownerId: user.userId })
          .subscribe(() => {
            this.getPets();
          });
      }
    });
  }

  getSpecies(): void {
    this.speciesIsLoading.next(true);

    this.dataService.getSpecies().subscribe((data) => {
      this.species.next(data);
      this.speciesIsLoading.next(false);
    });
  }
}
