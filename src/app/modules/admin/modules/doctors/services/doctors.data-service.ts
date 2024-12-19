import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { DoctorsListTableItem } from '../resources/interfaces/doctors-list-table-item.interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DoctorsDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<DoctorsListTableItem[]> {
    return this.http.get<DoctorsListTableItem[]>(apiUrl + 'doctors');
  }

  update(payload: DoctorsListTableItem): Observable<DoctorsListTableItem> {
    return this.http.put<DoctorsListTableItem>(
      `${apiUrl}doctors/${payload.id}`,
      payload
    );
  }

  create(payload: DoctorsListTableItem): Observable<DoctorsListTableItem> {
    return this.http.post<DoctorsListTableItem>(`${apiUrl}doctors`, {
      ...payload,
      practicingFrom: moment(payload.practicingFrom).format('yyyy-MM-DD'),
    });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}doctors/${id}`);
  }

  getDoctorById(id: string): Observable<any> {
    return this.http.get<any>(apiUrl + 'doctors/' + id);
  }
}
