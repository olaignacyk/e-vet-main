import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorsListTableItem } from '../../doctors/resources/interfaces/doctors-list-table-item.interface';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { Pet } from '../resources/interfaces/pet.interface';

@Injectable({ providedIn: 'root' })
export class PetsDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Pet[]> {
    return this.http.get<Pet[]>(apiUrl + 'pets');
  }

  getPetById(id: number): Observable<any> {
    return this.http.get(apiUrl + 'pets/' + id);
  }
}
