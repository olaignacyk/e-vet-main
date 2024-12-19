import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpeciesDataService } from './species.data-service';
import { SpecializationsDataService } from '../../specializations/services/specializations.data-service';
import { SpeciesListTableItem } from '../resources/interfaces/species-list-table-item.interface';
import { Specializaton } from '../../specializations/resources/interfaces/specializaton.interface';

@Injectable()
export class SpeciesState {
  species = new BehaviorSubject<SpeciesListTableItem[]>([]);
  speciesIsLoading = new BehaviorSubject(false);
  specializations = new BehaviorSubject<Specializaton[]>([]);

  constructor(
    private dataService: SpeciesDataService,
    private specDataService: SpecializationsDataService
  ) {}

  getSpecies(): void {
    this.speciesIsLoading.next(true);

    this.dataService.getList().subscribe((data) => {
      this.species.next(data);
      this.speciesIsLoading.next(false);
    });

    this.specDataService.getList().subscribe((data) => {
      this.specializations.next(data);
    });
  }
}
