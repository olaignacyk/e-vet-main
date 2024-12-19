import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { Injectable } from '@angular/core';
import { SpeciesListTableItem } from '../resources/interfaces/species-list-table-item.interface';

@Injectable()
export class SpeciesDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<SpeciesListTableItem[]> {
    return this.http.get<SpeciesListTableItem[]>(apiUrl + 'species');
  }

  update(payload: SpeciesListTableItem): Observable<SpeciesListTableItem> {
    return this.http.put<SpeciesListTableItem>(
      `${apiUrl}species/${payload.id}`,
      payload
    );
  }

  create(payload: SpeciesListTableItem): Observable<SpeciesListTableItem> {
    return this.http.post<SpeciesListTableItem>(`${apiUrl}species`, payload);
  }
}
