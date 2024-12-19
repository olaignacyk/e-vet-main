import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpecializationsDataService } from './specializations.data-service';
import { Specializaton } from '../resources/interfaces/specializaton.interface';
import { SpeciesDataService } from '../../species/services/species.data-service';
import { SpeciesListTableItem } from '../../species/resources/interfaces/species-list-table-item.interface';

@Injectable()
export class SpecializationsState {
  specializations = new BehaviorSubject<Specializaton[]>([]);
  specializationsIsLoading = new BehaviorSubject(false);

  constructor(private dataService: SpecializationsDataService) {}

  getSpecies(): void {
    this.specializationsIsLoading.next(true);

    this.dataService.getList().subscribe((data) => {
      this.specializations.next(data);
      this.specializationsIsLoading.next(false);
    });
  }
}
