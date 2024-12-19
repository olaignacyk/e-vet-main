import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppointmentDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(apiUrl + 'appointments');
  }

  getById(id: string): Observable<any> {
    return this.http.get(apiUrl + 'appointments/' + id);
  }

  createAppointment(payload: any): Observable<any> {
    return this.http.post(apiUrl + 'appointments', payload);
  }
}
