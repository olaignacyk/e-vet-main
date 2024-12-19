import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { Injectable } from '@angular/core';
import { Specializaton } from '../resources/interfaces/specializaton.interface';

@Injectable()
export class SpecializationsDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Specializaton[]> {
    return this.http.get<Specializaton[]>(apiUrl + 'specializations');
  }

  create(name: string): Observable<Specializaton> {
    return this.http.post<Specializaton>(apiUrl + 'specializations', { name });
  }

  update(payload: Specializaton): Observable<Specializaton> {
    return this.http.put<Specializaton>(
      apiUrl + 'specializations/' + payload.id,
      { name: payload.name }
    );
  }
}
