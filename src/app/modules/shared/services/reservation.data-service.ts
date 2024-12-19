import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../../admin/modules/schedule/resources/interfaces/schedule.interface';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { CreateSchedule } from '../../admin/modules/schedule/resources/payloads/create-schedule.interface';
import { ReservationItem } from 'src/app/modules/shared/resources/interfaces/responses/reservation-item.response';
import { CreateReservationPayload } from 'src/app/modules/shared/resources/interfaces/payloads/create-reservation.payload';

@Injectable({ providedIn: 'root' })
export class ReservationDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<ReservationItem[]> {
    return this.http.get<ReservationItem[]>(apiUrl + 'reservations');
  }

  getReservationById(id: string): Observable<ReservationItem> {
    return this.http.get<ReservationItem>(apiUrl + 'reservations/' + id);
  }

  createReservation(
    payload: CreateReservationPayload
  ): Observable<ReservationItem[]> {
    return this.http.post<ReservationItem[]>(apiUrl + 'reservations', payload);
  }

  // updateReservation(payload: Reservation): Observable<Reservation> {
  //   return this.http.put<Reservation>(
  //     apiUrl + 'reservation/' + payload.id,
  //     payload
  //   );
  // }
}
