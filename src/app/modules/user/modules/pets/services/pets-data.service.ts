import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../resources/interfaces/pet.interface';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { HttpClient } from '@angular/common/http';
import { SpeciesListTableItem } from '../../../../admin/modules/species/resources/interfaces/species-list-table-item.interface';

@Injectable({ providedIn: 'root' })
export class PetsDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Pet[]> {
    return this.http.get<Pet[]>(apiUrl + 'pets');
  }

  getPetById(id: string): Observable<any> {
    return this.http.get(apiUrl + 'pets/' + id);
  }

  createPet(payload: Pet): Observable<Pet> {
    return this.http.post<Pet>(apiUrl + 'pets', payload);
  }

  getSpecies(): Observable<SpeciesListTableItem[]> {
    return this.http.get<SpeciesListTableItem[]>(apiUrl + 'species');
  }
}
