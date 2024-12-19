import { HttpClient } from '@angular/common/http';
import { OwnersListTableItem } from '../resources/interfaces/owners-list-table-item.interface';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { Injectable } from '@angular/core';

@Injectable()
export class OwnersDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<OwnersListTableItem[]> {
    return this.http.get<OwnersListTableItem[]>(apiUrl + 'owners');
  }

  update(payload: OwnersListTableItem): Observable<OwnersListTableItem> {
    return this.http.put<OwnersListTableItem>(
      `${apiUrl}owners/${payload.id}`,
      payload
    );
  }
}
